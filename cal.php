<?php
$phy=$_POST["phy"];
$chem=$_POST["che"];
$math=$_POST["math"];
$eng=$_POST["eng"];

$tot=$phy+$chem+$math+$eng;

$per=$tot*100/400;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculation</title>
</head>
<body bgcolor="grey">

    <?php
    echo "<h1> Total Marks : $tot </h1>";
    echo "<h2> Percentage : $per% </h2>";
    if($per>=60){
        echo "<h1> First Divison </h1>";
    }
    else if($per>=45){
        echo "<h1> Second Divison </h1>";
    }
    else if($per>=33){
        echo "<h1> Third Divison </h1>";
    }
    else{
        echo "<h1> You are Fail </h1>"; 
    }
    
    ?>

    
</body>
</html>