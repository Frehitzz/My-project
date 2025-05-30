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
    // to find the category from the question array
    const categoryObj = questions.find(cat => cat.category === selectedCategory)

    //to store the number of how many questions you want
    const numofQue = parseInt(document.querySelector('.numberof-button')?.textContent);

    //randomized and select question from the correct category
    const shuffled = [...categoryObj].slice(() => Math.random() - 0.5);
    //select a number of question absed on the user want
    const selectedQuestions = shuffled.slice(0,numofQue);

    //to show the question and answer


}

function displayQuestion(currentQuestion, questionIndex, totalQuestions){
    //display the questions
    document.querySelector('.Questions').textContent = currentQuestion.question;

    const answerButtons = document.querySelector('.quiz-button');
  
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