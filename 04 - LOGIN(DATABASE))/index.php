
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Register</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"/>
</head>
<body>
    <form id="registerform" class="register" action="index.php" method="POST">
        <div class="input">
            <h1 class="title">Register</h1>
            <i class="fa-solid fa-user"></i>
        <input type="text" name="firstname" placeholder="First Name"><br>
        <i class="fa-solid fa-user"></i>
        <input type="text" name="lastname" placeholder="Last Name"><br>
        <i class="fa-solid fa-envelope"></i>
        <input type="email" name="email" placeholder="Email"><br>
        <i class="fa-solid fa-lock"></i>
        <input type="password" name="password" placeholder="Password">
        <br><br>
        <div class="bottom-container">
            <input class="register-button" type="submit" name="button" value="Signup">
            <p class="or">----------or----------</p>
            <div class="icons">
                <i id="gl" class="fa-brands fa-google"></i>
                <i id="fb" class="fa-brands fa-facebook"></i>
            </div>
        </div>
        <div class="signin">
            <p>Already have an account?</p>
            <a href="#" id="signin">Sign In</a>
        </div>
        </div>
        
    </form>
    

    <form id="signform" class="signup" action="index.php" method="POST" display>
        <h1 class="title">Sign In</h1>
        <div class="input2">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" name="email2" placeholder="Email"><br>
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password2" placeholder="Password"><br>
            <a href="#"><p class="recover">recover password</p></a>
            <div class="bottom-container2">
                <input class="signin-button" type="submit" name="button2" value="Sign In">
            <p class="or">----------or----------</p>
            <div class="icons">
                <i id="gl" class="fa-brands fa-google"></i>
                <i id="fb" class="fa-brands fa-facebook"></i>
            </div>
    
            <div class="signin">
                <p>Dont have account yet?</p>
                <a href="#" id="signup">Sign Up</a>
            </div>
            </div>
            
        </div>
        
        </div>
        </form>
        <script src="script.js"></script>
        
       
</body>
</html>

<?php

$server = "localhost";
$username = "root";
$password = "";
$name = "login_proj";
$conn = "";

$conn = mysqli_connect($server, $username,$password, $name);

if(!$conn){
    die("connection Failed: ".mysqli_connect_error());
}

    if(isset($_POST["button"])){

        if(empty($_POST["firstname"])){
            echo "please input this field";
        }else if(empty($_POST["lastname"])){
            echo "please input this field";
        }else if(empty($_POST["email"])){
            echo "please input this field";
        }else if(empty($_POST["password"])){
            echo "please input this field";
        }else{

            $firstname = $_POST["firstname"];
            $lastname = $_POST["lastname"];
            $email = $_POST["email"];
            $password = $_POST["password"];

            $hashpass = password_hash($password,PASSWORD_DEFAULT);

            $sql = "INSERT INTO registered_user (firstname,lastname,email,password)
                    VALUE ('$firstname','$lastname','$email','$hashpass')";

            mysqli_query($conn,$sql);

            
        }

    }    

    if(isset($_POST["button2"])){
        $email = $_POST["email2"];
        $password = $_POST["password2"];

        $sql = "SELECT * FROM registered_user WHERE email='$email'";
        $result = mysqli_query($conn,$sql);

        if($result && mysqli_num_rows($result) > 0){
            $row = mysqli_fetch_assoc($result);

            if (password_verify($password,$row['password'])){

                session_start();
                $_SESSION['user'] = $row;

                header("Location: dashboard.php");
                exit();
            }else{
                echo "wrong password";
            }
        }else{
            echo "invalid email";
        }


    }

?>