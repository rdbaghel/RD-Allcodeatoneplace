<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
<h1> Display Employee Records </h1>

<table border="1" align="center" width="500" bgcolor="yellow">
    <tr bgcolor="orange">
        <th> Emp no. </th>
        <th> Name </th>
        <th> Email </th>
        <th> Salary </th>
    </tr> 

  <?php

  $con=new mysql("localhost", "root", "", "Dev");
  $qry = "select * from employee" ;

    $result = $con->query($qry);
     while ( $row=$result->fetch_assoc()){
        echo "<tr>";
          echo "<td>".$row["empno"]."</td>";
          echo "<td>".$row["name"]."</td>";
          echo "<td>".$row["email"]."</td>";
          echo "<td>".$row["salary"]."</td>";
        echo "</tr>";  
     }
  ?>
</table>
    
</body>
</html>