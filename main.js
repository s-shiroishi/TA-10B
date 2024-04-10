const userInput = document.querySelector('#userInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const output = document.querySelector('#output');

let tasks = new Map();
let id = 0;

class Task {
    constructor(comment, condition) {
        this.comment = comment;
        this.condition = condition;
    }
}

const addTableDataText = (value, element) => {
    const tableData = document.createElement('td');
    tableData.textContent = value;
    element.appendChild(tableData);
};

const addTableDataButton = (value, element, clickHandler) => {
    const tableData = document.createElement('td');
    const btn = document.createElement('button');
    btn.textContent = value;
    tableData.appendChild(btn);
    element.appendChild(tableData);
    if (clickHandler) btn.onclick = clickHandler;
};

const clickDelete = event => {
    const tableRow = event.target.closest('tr');
    const taskId = Number(tableRow.firstChild.innerHTML);
    tasks.delete(taskId);
    resetId(tasks);
    output.innerHTML = '';
    viewTask(tasks);
}

const resetId = taskMap => {
    id = 0;
    let tmpTasks = new Map();

    taskMap.forEach((task) => {
        tmpTasks.set(id++, task);
    })

    tasks = tmpTasks;
};

const viewTask = taskMap => {
    taskMap.forEach((task, id) => {
        const tableRow = document.createElement('tr');
        addTableDataText(id, tableRow);
        addTableDataText(task.comment, tableRow);
        addTableDataButton(task.condition, tableRow);
        addTableDataButton('削除', tableRow, clickDelete);
        output.appendChild(tableRow);
    });
};

addTaskBtn.onclick = event => {
    output.innerHTML = '';

    const newTask = new Task(userInput.value, '作業中');
    tasks.set(id++, newTask);

    viewTask(tasks);

    userInput.value = '';
};