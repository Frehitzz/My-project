function Startbutt(){
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container-quiz").style.display = "flex";
}

document.querySelectorAll('.category-button').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.category-button').forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');
  });
});

document.querySelectorAll('.numberof-button').forEach(btn => {
    btn.addEventListener('click',function(){
        document.querySelectorAll('.numberof-button').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});