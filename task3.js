function taskFactory(taskList){

    return {
            viewTask: function(){
                                const text = [
                                                '=====================',
                                                '現在持っているタスク一覧',
                                                '====================='
                                            ].join('\n');
                            
                                console.log(text);
                            
                                for( let i = 0; i < taskList.length; i++){
                                    console.log(`${i} : ${taskList[i]}`);
                                }
                            },

            addTask: function (task){
                                    taskList.push(task);
                                    this.viewTask();
                                }
    };
}

const taskList = taskFactory(['掃除', '買い物', '散歩']);

taskList.viewTask();

let userInput = prompt('タスクを入力してください');

taskList.addTask(userInput);

userInput = prompt('[確認、追加、削除、終了]の4つのつのいずれかを入力してください');
