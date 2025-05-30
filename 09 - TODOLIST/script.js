// const myarray  = [11,22,33];
// console.log(myarray);
// console.log(myarray[2]);

// myarray[0] = 10; // it will change the 11 into 10 of our  array
// console.log(myarray[0]);

// const myarray2 = [10, 'hello', true, {name: 'fritz'}]; // you can store an array with different data types
// console.log(myarray2[1]);

// console.log(Array.isArray([1, 2, 3])); // the output is true

// console.log(myarray2.length); // bibilangin niya kung ilan meron sa myarray2 

// const myarray = [1,2,3];
// myarray.push(100); // this will add the 100 into the last of the array
// console.log(myarray); //output [1,2,3,100]

// myarray.splice(0,2);
// console.log(myarray);

const todoList = [];


function Addbutton(){
    const input = document.querySelector('.text');
    const listName = input.value;
    
    todoList.push(listName);
    input.value = ' ';

    let todohtml  = '';
for(let i = 0;i < todoList.length;i++){
    const Lists =   todoList[i];
    const html = `<p>${Lists}</p>`;

    todohtml += html;
}
document.querySelector('.task-lists').innerHTML = todohtml;
}

