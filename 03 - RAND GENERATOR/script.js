

function generate(){
    let min = document.getElementById("minrange").value;
    let max = document.getElementById("maxrange").value;

    let Mymin = parseInt(min);
    let Mymax = parseInt(max); 

        if(Mymin === Mymax){
            document.getElementById("text").textContent = "The max range must be greater than min range";
        } else if (Mymin < Mymax){
            let random = Math.floor(Math.random() * (Mymax - Mymin + 1)) + Mymin;
            document.getElementById("result").textContent = random;
            document.getElementById("text").textContent = "Your number is";
        } else{
            document.getElementById("text").textContent = "The max range must be greater than min range";
        }   

        document.getElementById("title").textContent = " ";
}

