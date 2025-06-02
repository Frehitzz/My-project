
const todoList = [];

function rendertodo(){
let todohtml  = '';
todohtml += `<h4>Your remaining todos: ${todoList.length}</h4><br>`; // this will count the task
for(let i = 0;i < todoList.length;i++){
        const Listsobj = todoList[i];
        const { name } = Listsobj;
        const { dueDate } = Listsobj;

        //template literal
        const html = `
        <p><input type="checkbox" class="mycheck">${name} ${dueDate}
        <button onclick="todoList.splice(${i},1);rendertodo();">DELETE</button>
        </p>
        `;
    todohtml += html; // this update the list when yo add or remove
}
document.querySelector('.task-lists').innerHTML = todohtml;
}



function Addbutton(){
    const input = document.querySelector('.text');
    const listName = input.value;
    
    const deadline = document.querySelector('.deadline');
    const duedate = deadline.value;
    
    todoList.push({
        name: listName,
        dueDate: duedate
    }); // adding to array .push
    input.value = ' '; // clearing the input
    deadline.value = ' '; // clearing the dates

    rendertodo(); // calls the functionn of displaynig the array and delete butt
}



