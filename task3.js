function viewTask(taskList) {
    const text = `${'='.repeat(20)}\n現在持っているタスク一覧\n${'='.repeat(20)}`;

    console.log(text);

    for (let i = 0; i < taskList.length; i++) {
        console.log(`${i} : ${taskList[i]}`);
    }
}

function taskFactory(taskList) {

    return {
        taskList,
        addTask: function (task) {
            this.taskList.push(task);
            viewTask(this.taskList);
        }
    };
}

const tasks = taskFactory(['掃除', '買い物', '散歩']);

viewTask(tasks.taskList);

let userInput = prompt('タスクを入力してください');

tasks.addTask(userInput);

userInput = prompt('[確認、追加、削除、終了]の4つのつのいずれかを入力してください');
