<?php
$empno=$_POST["Eno"];
$name=$_POST["nam"];
$email=$_POST["Email"];
$salary=$_POST["sal"];

$con=new mysql("localhost", "root", "", "Dev");
$sql="insert into employee(empno, name, email, salary )
           values('$empno', '$name', '$email', '$salary')";
$con->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Saved Page</title>
</head>
<body bgcolor="green">

<h1> Welcome To PHP CRUD Operations </h1>

<a href="index.php"> Home </a> |
<a href="insert.php"> Insert </a> |
<a href="display.php"> Display </a> |
<a href="search.php"> Search </a> |
<a href="update.php"> Update </a> |
<a href="contact.php"> Contact </a> |

<hr size="4" color="yellow">

<h1> DATA SAVE!! </h1>

<hr size="4" color="yellow">

www.cybrom.com 2024

    
</body>
</html>