const userInput = document.querySelector('#userInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const output = document.querySelector('#output');

class TaskManager {
    constructor() {
        this.tasks = new Map();
        this.id = 0;
    }

    addTask(comment, condition) {
        this.tasks.set(this.id++, { comment: comment, condition: condition });
    }
}

const addHiddenId = (value, element) => {
    const hiddenId = document.createElement('input')
    hiddenId.type = 'hidden'
    hiddenId.value = value;
    element.appendChild(hiddenId);
};

const addTableDataText = (value, element) => {
    const tableData = document.createElement('td');
    tableData.textContent = value;
    element.appendChild(tableData);
};

const addTableDataButton = (value, element, clickHandler, ...args) => {
    const tableData = document.createElement('td');
    const btn = document.createElement('button');
    btn.textContent = value;
    btn.onclick = event => clickHandler(event, ...args);
    tableData.appendChild(btn);
    element.appendChild(tableData);
};

const viewTask = (taskMap) => {
    let rowId = 0;
    taskMap.forEach((task, id) => {
        const tableRow = document.createElement('tr');
        addTableDataText(rowId++, tableRow);
        addTableDataText(task.comment, tableRow);
        addTableDataButton(task.condition, tableRow);
        addTableDataButton('削除', tableRow, clickDelete, taskMap);
        addHiddenId(id, tableRow);
        output.appendChild(tableRow);
    });
};

const clickDelete = (event, taskMap) => {
    const tableRow = event.target.closest('tr');
    const taskId = Number(tableRow.lastChild.value);
    taskMap.delete(taskId);
    output.innerHTML = '';
    viewTask(taskMap);
};

const taskManager = new TaskManager();

addTaskBtn.onclick = () => {
    output.innerHTML = '';

    taskManager.addTask(userInput.value, '作業中');

    viewTask(taskManager.tasks);

    userInput.value = '';
};