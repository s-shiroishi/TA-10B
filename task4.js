function viewTask(taskList) {
    const text = `${'='.repeat(20)}\n現在持っているタスク一覧\n${'='.repeat(20)}`;

    console.log(text);

    for (let i = 0; i < taskList.length; i++) {
        console.log(`${i} : [内容]${taskList[i]['content']}、[ジャンル]${taskList[i]['genre']}`);
    }
}

function taskFactory(taskList) {

    return {
        taskList,
        addTask: function (taskObj) {
            this.taskList.push(taskObj);
            viewTask(this.taskList);
        }
    };
}
const taskList = [
    { 'content': '机を片付ける', 'genre': '掃除' },
    { 'content': '牛乳を買う', 'genre': '買い物' },
    { 'content': '散歩する', 'genre': '運動' }
]
const tasks = taskFactory(taskList);

viewTask(tasks.taskList);

let userInputContent = prompt('タスクを入力してください');
let userInputGenre = prompt('ジャンルを入力してください');

tasks.addTask({ 'content': userInputContent, 'genre': userInputGenre });

userInput = prompt('[確認、追加、削除、終了]の4つのつのいずれかを入力してください');
