// to pick a word between rock paper scissor randomly
function randomWords(){
    const words = ['ROCK', 'PAPER', 'SCISSOR']; // declaring the words that we will use
    const generatedwords = Math.floor(Math.random()* words.length); // 
    return words[generatedwords];


}


// function to determine whos winner
function determinewinner(player, computer){

    if (player === computer){ // if the player and computer is tie
        document.getElementById("result").textContent = 'Its a tie!! ';
    } else if (
    (player === 'ROCK' && computer === 'SCISSOR') ||  // mga possible scenario kapag nanalo yung player
    (player === 'PAPER' && computer === 'ROCK') ||
    (player === 'SCISSOR' && computer === 'PAPER')
    ){
        document.getElementById("result").textContent = 'YOU WIN!!!';
    } else { // kapag natalo 
        document.getElementById("result").textContent = 'COMPUTER WINS:(';
    }
    

}
function showresetbtn(){
    document.getElementById("choice-btn").style.display = "none";
    document.getElementById("reset").style.display = "block";
}

function showchoicebtn(){
    document.getElementById("choice-btn").style.display = "block";
    document.getElementById("reset").style.display = "none";
}

function rockbutton(){
    const player = 'ROCK';
    const computer = randomWords();
    document.getElementById("display").textContent = player;
    document.getElementById("pc-display").textContent = computer;
    determinewinner(player,computer);
    showresetbtn();
}

function paperbutton(){
    const player = 'PAPER';
    const computer = randomWords();
    document.getElementById("display").textContent = player;
    document.getElementById("pc-display").textContent = computer;
    determinewinner(player, computer);
    showresetbtn();
}

function scissorbutton(){
    const player = 'SCISSOR';
    const computer = randomWords();
    document.getElementById("display").textContent = player;
    document.getElementById("pc-display").textContent = computer;
    determinewinner(player, computer);
    showresetbtn();
}

function resetbtn(){
    document.getElementById("display").textContent = '';
    document.getElementById("pc-display").textContent = '';
    document.getElementById("result").textContent = '';
    showchoicebtn();
}
