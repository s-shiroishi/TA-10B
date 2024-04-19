class Quiz {
    constructor(amount = 10) {
        this.amount = amount;
    }

    async fetchQuizData(amount) {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`)
        const responseJson = await response.json();
        this.data = new Map(responseJson.results.map((obj, id) => [id, obj]));
    }

    createQuizHTML(id) {
        const quiz = this.data.get(id);
        const answers = [...quiz.incorrect_answers, quiz.correct_answer];
        const random_answers = answers.sort(() => Math.random() - 0.5);

        return `
        <h1>問題${id + 1}</h1>
        <h3>[ジャンル] ${quiz.category}</h3>
        <h3>[難易度] ${quiz.difficulty}</h3>
        <hr>
        <p>${quiz.question}</p>
        <hr>
        ${random_answers.map(answer => `<section><button class="answer-btn" data-answer="${quiz.correct_answer === answer}">${answer}</button></section>`).join('')}
        `;
    }
}

class App {
    constructor(root) {
        this.root = root;
    };

    startQuiz() {
        this.id = 0;
        this.correctAnswerCount = 0;
        this.root.innerHTML = `
    <h1>ようこそ</h1>
    <hr>
    <p>以下のボタンをクリック</p>
    <hr>
    <button class="start-btn">開始</button>
    `;

        this.root.querySelector('.start-btn').addEventListener('click', async () => {
            this.root.innerHTML = `
            <h1>取得中</h1>
            <hr>
            <p>少々お待ちください</p>
            <hr>
            `
            this.quiz = new Quiz();
            await this.quiz.fetchQuizData();
            this.addAnswerBtnListener()
        });

    }

    addAnswerBtnListener() {
        this.root.innerHTML = this.quiz.createQuizHTML(this.id)
        const answerButtons = this.root.querySelectorAll('.answer-btn');
        answerButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.dataset.answer === 'true') {
                    this.correctAnswerCount++;
                }
                if (this.id < this.quiz.amount - 1) {
                    this.id++;
                    this.addAnswerBtnListener();
                } else {
                    this.root.innerHTML = this.endQuiz();
                    document.querySelector('.home-btn').addEventListener('click', () => {
                        this.startQuiz();
                    })
                }
            });
        });
    }

    endQuiz() {
        return `
        <h1>あなたの正答数は${this.correctAnswerCount}です!!</h1>
        <hr>
        <p>再度チャレンジしたい場合は以下をクリック</p>
        <hr>
        <button class="home-btn">ホームへ戻る</button>
        `
    }


}

const root = document.querySelector('.root');

const app = new App(root);

app.startQuiz();
