const viewTask = (taskList) => {
    const text = `${'='.repeat(20)}\n現在持っているタスク一覧\n${'='.repeat(20)}`;

    console.log(text);

    taskList.forEach((task, idx) => {
        console.log(`${idx} : [内容]${task['content']}、[ジャンル]${task['genre']}`);
    })
}

const taskFactory = (taskList) => {

    return {
        taskList,
        addTask: (taskObj) => {
            taskList.push(taskObj);
            viewTask(taskList);
        }
    };
}
const tasks = [
    { 'content': '机を片付ける', 'genre': '掃除' },
    { 'content': '牛乳を買う', 'genre': '買い物' },
    { 'content': '散歩する', 'genre': '運動' }
]
const taskController = taskFactory(tasks);

viewTask(taskController.taskList);

let userInputContent = prompt('タスクを入力してください');
let userInputGenre = prompt('ジャンルを入力してください');

taskController.addTask({ 'content': userInputContent, 'genre': userInputGenre });

userInput = prompt('[確認、追加、削除、終了]の4つのつのいずれかを入力してください');
