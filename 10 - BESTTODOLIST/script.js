const taskList = [];
const completeTask = [];

function opendate(){
    const popup = document.querySelector('.calendar-open')
    popup.classList.toggle('show');

    if (popup.classList.contains('show')){
        document.querySelector('.calendardate').focus();
    }

}

function display(){
    let displayhtml = '';
    let taskcount = '';
    taskcount += `<p>Your remaining tasks:${taskList.length}</p>`;
    document.querySelector('.remaining-count').innerHTML = taskcount;
    for(let i = 0;i < taskList.length; i++){
        const Listobj = taskList[i];
        const { name } = Listobj;
        const { dueDate } = Listobj;

        //animation
        const animateClass = (i === taskList.length - 1) ? ' animate' : '';
        const htmlliteral = `
        <div class="added-task${animateClass}">
            <input type="checkbox" class="mycheck" onclick="completeTaskfunct(${i})">
            <div class="namedate">
            <p class="task-info">${name}<br><span class="due-date">${dueDate}</span></p>
            </div>
            <div class="delete-btn" onclick="deleteTask(${i})">
            <i class="fa-solid fa-x"></i>
            </div>
        </div>
        `;
        displayhtml += htmlliteral;
    }
    document.querySelector('.task-list').innerHTML = displayhtml;
     // Remove the animation class after animation completes
    const lastTask = document.querySelector('.added-task.animate');
    if (lastTask) {
        setTimeout(() => {
            lastTask.classList.remove('animate');
        }, 500); // match animation duration
    }

    //for completed task
    let completecount = '';
    let completedhtml = '';
    
    completecount += `
    <div class="counter-complete">
    <p>Completed Task: ${completeTask.length}</p>
    <span onclick="showdonetask()">
    <i id="iconeye" class="fa-solid fa-eye-slash"></i>
    </span
    </div>
    `;
    document.querySelector('.completed-count').innerHTML = completecount;
    for(let i = 0; i < completeTask.length; i++){
        const { name, dueDate } = completeTask[i];
        
        completedhtml += `
        <div class="completed-task">
            <input type="checkbox" class="mycheck" onclick="uncompleteTask(${i})" checked>
            <div class="namedate">
            <p class="completed-task-info"><span style="text-decoration-line: line-through; text-decoration-style: double;">${name}</span><br><span class="due-date">${dueDate}</span></p>
            </div>
            <div class="delete-btn" onclick="deletecompleteTask(${i})">
                <i class="fa-solid fa-x"></i>
            </div>            
        </div>
        `;
    }

    document.querySelector('.completed-list').innerHTML = completedhtml;

}

function completeTaskfunct(index){
    completeTask.push(taskList[index]);
    taskList.splice(index, 1);
    display()
}

function uncompleteTask(index){
    taskList.push(completeTask[index]);
    completeTask.splice(index, 1);
    display();
}

function deleteTask(index){
    taskList.splice(index, 1);
    display();
}

function deletecompleteTask(index){
    completeTask.splice(index, 1);
    display();
}




function addbutton(){
    const textinput = document.querySelector('.input-field');
    const addedtask = textinput.value.trim();

    if(addedtask === ""){
        const toast = document.querySelector('.popupmess');
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
        return;
    }

    const calendarinput = document.querySelector('.calendardate');
    const deadline = calendarinput.value;

        taskList.push({
        name: addedtask,
        dueDate: deadline
    });
    textinput.value = '';
    calendarinput.value = '';

    display();

    // for closing the date input always
    const popup = document.querySelector('.calendar-open');
    popup.classList.remove('show');
}

function showdonetask() {
    const container = document.querySelector('.completed-list-container');
    const icon = document.getElementById('iconeye');

    container.classList.toggle('show'); // toggles visibility class

    if (container.classList.contains('show')) {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}



