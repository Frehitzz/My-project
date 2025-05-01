const Signup = document.getElementById('signup');
const Signin = document.getElementById('signin');
const Signupform = document.getElementById('signform');
const Signinform = document.getElementById('registerform');

Signup.addEventListener('click',function(){
    Signupform.style.display="none";
    Signinform.style.display="block";
});

Signin.addEventListener('click',function(){
    Signinform.style.display="none";
    Signupform.style.display="block";
})