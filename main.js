class Quiz {
    #id = 0;
    #correctAnswerCount = 0;
    #amount;
    constructor(amount = 10) {
        this.#amount = amount;
    }

    getId() {
        return this.#id;
    }

    addId() {
        this.#id ++;
    }

    getCorrectAnswerCount() {
        return this.#correctAnswerCount;
    }

    addCorrectAnswerCount() {
        this.#correctAnswerCount ++;
    }

    getAmount() {
        return this.#amount;
    }


    async fetchQuizData(amount) {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`)
        const responseJson = await response.json();
        this.data = new Map(responseJson.results.map((obj, id) => [id, obj]));
    }

    createQuizHTML() {
        const quiz = this.data.get(this.#id);
        const answers = [...quiz.incorrect_answers, quiz.correct_answer];
        const random_answers = answers.sort(() => Math.random() - 0.5);

        return `
        <h1>問題${this.#id + 1}</h1>
        <h3>[ジャンル] ${quiz.category}</h3>
        <h3>[難易度] ${quiz.difficulty}</h3>
        <hr>
        <p>${quiz.question}</p>
        <hr>
        ${random_answers.map(answer => `<section><button class="answer-btn" data-answer="${quiz.correct_answer === answer}">${answer}</button></section>`).join('')}
        `;
    }
}

startQuiz = (root) => {

    const quiz = new Quiz();

    root.innerHTML = `
    <h1>ようこそ</h1>
    <hr>
    <p>以下のボタンをクリック</p>
    <hr>
    <button class="start-btn">開始</button>
    `;

    root.querySelector('.start-btn').addEventListener('click', async () => {
        root.innerHTML = `
            <h1>取得中</h1>
            <hr>
            <p>少々お待ちください</p>
            <hr>
            `
        await quiz.fetchQuizData();
        addAnswerBtnListener(quiz);
    });

}

addAnswerBtnListener = (quiz) => {
    root.innerHTML = quiz.createQuizHTML();
    const answerButtons = root.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.answer === 'true') {
                quiz.addCorrectAnswerCount();
            }
            if (quiz.getId() < quiz.getAmount() - 1) {
                quiz.addId();
                addAnswerBtnListener(quiz);
            } else {
                root.innerHTML = endQuiz(quiz);
                document.querySelector('.home-btn').addEventListener('click', () => {
                    startQuiz(root);
                })
            }
        });
    });
}

endQuiz = (quiz) => {
    return `
        <h1>あなたの正答数は${quiz.getCorrectAnswerCount()}です!!</h1>
        <hr>
        <p>再度チャレンジしたい場合は以下をクリック</p>
        <hr>
        <button class="home-btn">ホームへ戻る</button>
        `
}

const root = document.querySelector('#root');

startQuiz(root);
