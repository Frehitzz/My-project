<?php
    session_start();
    $row = $_SESSION['user'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>
    <h1>WELCOME TO DASHBOARD</h1>
    <h1><?php echo $row['firstname']?></h1>
    <p><a href="logout.php">Logout</a></p>
</body>
</html>