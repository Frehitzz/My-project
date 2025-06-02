/*let i = 1;
while(i <= 5){ // the 5 is the limit of loop so it loop 5 times
    console.log("pizza");
    i++; // this stop the loop
}

for(let i = 1; i<=10; i++){
    console.log('Fritz');
}
*/

//LOOPING THROUGH AN ARRAY
/*const myArray = [
    'make dishes',
    'watch movie',
    'clean fan',
    'do laundry'
];

for(let index = 0;index <= myArray.length-1; index++){
    const value = myArray[index];
    console.log(value);
}
*/

//ACCUMULATOR PATTERN
//PROBLEM: WE HAVE AN ARRAY OF NUMBERS [1,1,3],
//HOW DO WE CALCULATE THE TOTAL IT MUST BE TOTAL=5 BC 1+1+3 = 5

//step1: create an array 
//step2: create a variable for storing the total
//step3: implement a for loop
//step4: consolelog the total outside of loop
const number = [1,1,3];
let total = 0

for(let i = 0;i < number.length;i++){
    const nums = number[i];
    total += nums;
}
console.log(total);

//PROBLEM: CREATE A COPY OF ARRAY THAT EACH NUMBER IS DOUBLED
//EXAMPLE: IN OUR ARRAY WE HAVE [1,1,3] WE WILL DOUBLE IT [2,2,6]

//step1: create an blank array
const numberdouble = [];

for(let i = 0; i < number.length; i++){
    const nums = number[i];
    numberdouble.push(nums *2); // to double it we need to multiply to 2
}
console.log(numberdouble);