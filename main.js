const userInput = document.querySelector('#userInput')
const addTaskBtn = document.querySelector('#addTaskBtn');
const output = document.querySelector('#output');

const tasks = new Map;
let id = 0;

class Task {
    constructor(comment, condition) {
        this.comment = comment;
        this.condition = condition;
    }
}

addTableDataText = (value, element) => {
    const td = document.createElement('td');
    td.textContent = value;
    element.appendChild(td);
}

addTableDataButton = (value, element) => {
    const td = document.createElement('td');
    const btn = document.createElement('button');
    btn.textContent = value;
    td.appendChild(btn);
    element.appendChild(td);
}

viewTask = taskMap => {
    taskMap.forEach((task, id) => {
        const tableRow = document.createElement('tr');
        addTableDataText(id, tableRow);
        addTableDataText(task.comment, tableRow);
        addTableDataButton(task.condition, tableRow);
        addTableDataButton('削除', tableRow);
        output.appendChild(tableRow);
    })
}

addTaskBtn.onclick = (event) => {
    output.innerHTML = '';

    const newTask = new Task(userInput.value, '作業中');
    tasks.set(id++, newTask);

    viewTask(tasks)

    userInput.value = '';
};

