function Startbutt(){
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container-quiz").style.display = "flex";

    // Get selected category
    const selectedCategory = document.querySelector('.category-button.selected')?.textContent;
    if(!selectedCategory){
      alert("Please choose category");
      document.querySelector(".container").style.display = "flex";
      document.querySelector(".container-quiz").style.display = "none";
      return; // this will stop the funtion of getting into the quiz container
    }

    //Get selected number of questions
    const numberofQuestions = document.querySelector('.numberof-button.selected')?.textContent;
    if(!numberofQuestions){
      alert("Please choose how many number of questions you want");
      document.querySelector(".container").style.display = "flex";
      document.querySelector(".container-quiz").style.display = "none";
      return;
    }
}

//selection of category
document.querySelectorAll('.category-button').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.category-button').forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');
  });
});

//selection number of quiz
document.querySelectorAll('.numberof-button').forEach(btn => {
    btn.addEventListener('click',function(){
        document.querySelectorAll('.numberof-button').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});

//quiz answer button

document.querySelectorAll('.quiz-button').forEach(button1 =>{
  button1.addEventListener('click',function(){
    document.querySelectorAll('.quiz-button').forEach(button2 => button2.classList.remove('selected'));
    this.classList.add('selected');
  });
});