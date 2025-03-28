let count = 0;
function increase(){
count ++;
document.getElementById("display").textContent = count;
}

function decrease(){
    count--;
    document.getElementById("display").textContent = count;
}

function reset(){
    count = 0;
    document.getElementById("display").textContent = count;
}