class Id {
    static id = 0;
    static increment = () => this.id += 1;
}

class Task {
    constructor(comment, condition = '作業中') {
        this.comment = comment,
            this.condition = condition
    }
}

addTaskMap = (id, comment) => {
    const newTask = new Task(comment)
    taskMap.set(id, newTask);
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

const userInput = document.querySelector('#userInput')
const addTaskBtn = document.querySelector('#addTaskBtn');
const output = document.querySelector('#output');

const taskMap = new Map();

addTaskBtn.onclick = (event) => {
    output.innerHTML = '';
    addTaskMap(Id.id, userInput.value);
    viewTask(taskMap);
    Id.increment();
    userInput.value = '';
};

