<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Data Page</title>
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

<h3> Welcome To Home Page </h3>

<hr size="4" color="yellow">

<h3> Insert Employee Records </h3>
  <form method="post" action="save.php">
      Enter Emp No : <input type="text" name="Eno">
      <br> 
      Enter Name : <input type="text" name="nam"> 
      <br>
      Enter Email : <input type="text" name="Email">
      <br>
      Enter Salary : <input type="text" name="sal">
      <br>
      <input type="submit" value="save">
  </form>

  <hr size="4" color="yellow">
  www.cybrom.com 2024
</body>
</html>