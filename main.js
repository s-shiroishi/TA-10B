class IdController {
    constructor(id = 0) {
        this.id = id;
    };
    increment = () => this.id++;
}

class Task {
    constructor(comment, condition = '作業中') {
        this.comment = comment,
            this.condition = condition
    }
}

class TaskMapController {
    constructor() {
        this.idController = new IdController(),
            this.taskMap = new Map()
    }
    addTask(comment) {
        const newTask = new Task(comment)
        this.taskMap.set(this.idController.id, newTask);
        this.idController.increment();
    }
}

viewTask = (taskMap) => {

    taskMap.forEach((task, id) => {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = id;

        const tdComment = document.createElement('td');
        tdComment.textContent = task.comment;

        const tdCondition = document.createElement('td');
        const conditionBtn = document.createElement('button');
        conditionBtn.textContent = task.condition;
        tdCondition.appendChild(conditionBtn);

        const tdDelete = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';
        tdDelete.appendChild(deleteBtn);

        for (const td of [tdId, tdComment, tdCondition, tdDelete]) {
            tr.appendChild(td);
        }

        output.appendChild(tr);
    });
}

const currentTask = new TaskMapController();

const userInput = document.querySelector('#userInput')
const addTaskBtn = document.querySelector('#addTaskBtn');
const output = document.querySelector('#output');



addTaskBtn.onclick = (event) => {
    output.innerHTML = '';
    currentTask.addTask(userInput.value);
    viewTask(currentTask.taskMap);
    userInput.value = '';
};

