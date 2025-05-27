const display = document.getElementById("display");

display.value = "0";

// to clear all or delte all
function clearAll(){
    display.value = "0";
}

// will delete the previous number
function deleteLast() {
   let current = display.value;
    // Only slice if not already "0"
    if (current !== "0") {
        current = current.slice(0, -1);
        display.value = current === "" ? "0" : current;
    }
}

//to display the selected button
function todisplay(input){
    if(input === "%"){
        calculatePercentage();
        return;
    }

    if (display.value === "0" && input !== ".") {
        display.value = input;
    } else {
        display.value += input;
    }

}

function calculatePercentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch (error){
        display.value = "Error";
    }
}