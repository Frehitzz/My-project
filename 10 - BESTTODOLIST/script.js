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

        const htmlliteral = `
        <div class="added-task">
            <input type="checkbox" class="mycheck">
            <div class="namedate">
            <p class="task-info">${name}<br><span class="due-date">${dueDate}</span></p>
            </div>
            <div class="delete-btn">
            <i class="fa-solid fa-x"></i>
            </div>
        </div>
        `;
        displayhtml += htmlliteral;
    }
    document.querySelector('.task-list').innerHTML = displayhtml;
}

function addbutton(){
    const textinput = document.querySelector('.input-field');
    const addedtask = textinput.value;

    const calendarinput = document.querySelector('.calendardate');
    const deadline = calendarinput.value;

    taskList.push({
        name: addedtask,
        dueDate: deadline
    });
    textinput.value = ' ';
    calendarinput.value = ' ';

    display();
    opendate();

}


