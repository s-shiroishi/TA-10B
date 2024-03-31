class IdController {
    constructor(id = 0) {
        this.id = id;
    };
    increment = () => this.id++;
}

class Task {
    constructor(comment, condition = '作業中') {
        this.comment = comment;
        this.condition = condition;
    }
}

class TaskMapController {
    constructor() {
        this.idController = new IdController();
        this.taskMap = new Map();
    }
    addTask(comment) {
        const newTask = new Task(comment)
        this.taskMap.set(this.idController.id, newTask);
        this.idController.increment();
    }
}

class AddTableText {
    addContent(value, element) {
        const td = document.createElement('td');
        td.textContent = value
        element.appendChild(td);
    }
}

class AddTableButton {
    addContent(value, element) {
        const td = document.createElement('td');
        const btn = document.createElement('button');
        btn.textContent = value;
        td.appendChild(btn);
        element.appendChild(td);
    }
}

class AddRowController {
    constructor(outputTable) {
        this.addTableText = new AddTableText();
        this.addTableButton = new AddTableButton();
        this.outputTable = outputTable;
    }

    addRow(taskMap) {
        taskMap.forEach((task, id) => {
            const tr = document.createElement('tr');
            this.addTableText.addContent(id, tr);
            this.addTableText.addContent(task.comment, tr);
            this.addTableButton.addContent(task.condition, tr);
            this.addTableButton.addContent('削除', tr);
            this.outputTable.appendChild(tr);
        })
    }
}

const currentTask = new TaskMapController();
const userInput = document.querySelector('#userInput')
const addTaskBtn = document.querySelector('#addTaskBtn');
const output = document.querySelector('#output');



addTaskBtn.onclick = (event) => {
    output.innerHTML = '';
    currentTask.addTask(userInput.value);
    const addcontroller = new AddRowController(output);
    addcontroller.addRow(currentTask.taskMap);
    userInput.value = '';
};

