const userInput = document.querySelector('#userInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const output = document.querySelector('#output');
const radioAll = document.querySelectorAll('input[name="radio"]');

class TaskManager {
    constructor() {
        this.tasks = new Map();
        this.id = 0;
    }

    addTask(comment, status) {
        this.tasks.set(this.id++, { comment: comment, status: status });
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
    const selectedRadioValue = document.querySelector('input[name="radio"]:checked').value;
    let rowId = 0;
    taskMap.forEach((task, id) => {
        if (selectedRadioValue == 'すべて' || task.status === selectedRadioValue) {
            const tableRow = document.createElement('tr');
            addTableDataText(rowId++, tableRow);
            addTableDataText(task.comment, tableRow);
            addTableDataButton(task.status, tableRow, clickStatus, taskMap);
            addTableDataButton('削除', tableRow, clickDelete, taskMap);
            addHiddenId(id, tableRow);
            output.appendChild(tableRow);
        } else {
            rowId++;
            return;
        }
    });
};

const clickStatus = (event, taskMap) => {
    const taskStatus = event.target.innerHTML;
    const tableRow = event.target.closest('tr');
    const taskId = Number(tableRow.lastChild.value);
    const newStatus = taskStatus === '作業中' ? '完了' : '作業中';
    taskMap.get(taskId).status = newStatus;
    output.innerHTML = '';
    viewTask(taskMap);
};

const clickDelete = (event, taskMap) => {
    const tableRow = event.target.closest('tr');
    const taskId = Number(tableRow.lastChild.value);
    taskMap.delete(taskId);
    output.innerHTML = '';
    viewTask(taskMap);
};

const taskManager = new TaskManager();

document.querySelectorAll('input[name="radio"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        output.innerHTML = '';
        viewTask(taskManager.tasks);
    })
});

addTaskBtn.addEventListener('click', () => {
    output.innerHTML = '';

    taskManager.addTask(userInput.value, '作業中');

    viewTask(taskManager.tasks);

    userInput.value = '';
});