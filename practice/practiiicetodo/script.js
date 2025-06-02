const todoList = [];
const completedList = []; //array  for completed

function rendertodo() {
    let todohtml = '';

    // when there is no todo thiiis willl hide
    if(todoList.length > 0){
        todohtml += `<h4>Your remaining todos: ${todoList.length}</h4>`;
    }
    for(let i = 0; i < todoList.length; i++) {
        const Listsobj = todoList[i];
        const { name, dueDate } = Listsobj;

        const html = `
        <div class="task-item">
            <input type="checkbox" class="mycheck" onchange="completeTask(${i})">
            ${name} ${dueDate}
            <button onclick="todoList.splice(${i},1); rendertodo();">DELETE</button>
        </div>
        `;
        todohtml += html;
    }
    document.querySelector('.task-lists').innerHTML = todohtml;
    
    // Render completed tasks
    let completedHtml = '';
    for(let i = 0; i < completedList.length; i++) {
        const completedObj = completedList[i];
        const { name, dueDate } = completedObj;

        completedHtml += `
        <div class="completed-task">
            <input type="checkbox" class="mycheck" checked onchange="uncompleteTask(${i})">
            ${name} ${dueDate}
            <button onclick="completedList.splice(${i},1); updateCompleted();">DELETE</button>
        </div>
        `;
    }
    document.querySelector('.completed-tasks-container').innerHTML = completedHtml;
    document.querySelector('.completed-count').textContent = completedList.length;
}

function completeTask(index) {
    // Move task from todoList to completedList
    const completedTask = todoList.splice(index, 1)[0];
    completedList.push(completedTask);
    rendertodo();
}

function uncompleteTask(index) {
    // Move task back from completedList to todoList
    const uncompletedTask = completedList.splice(index, 1)[0];
    todoList.push(uncompletedTask);
    rendertodo();
}

function updateCompleted() {
    // Just update the completed section without affecting todoList
    let completedHtml = '';
    for(let i = 0; i < completedList.length; i++) {
        const completedObj = completedList[i];
        const { name, dueDate } = completedObj;

        completedHtml += `
        <div class="completed-task">
            <input type="checkbox" class="mycheck" checked onchange="uncompleteTask(${i})">
            ${name} ${dueDate}
            <button onclick="completedList.splice(${i},1); updateCompleted();">DELETE</button>
        </div>
        `;
    }
    document.querySelector('.completed-tasks-container').innerHTML = completedHtml;
    document.querySelector('.completed-count').textContent = completedList.length;
}

function Addbutton() {
    const input = document.querySelector('.text');
    const listName = input.value.trim();
    
    if (!listName) {
        alert('Please enter a task name');
        return;
    }
    
    const deadline = document.querySelector('.deadline');
    const duedate = deadline.value;
    
    todoList.push({
        name: listName,
        dueDate: duedate
    });
    input.value = '';
    deadline.value = '';

    rendertodo();
}