<?php
session_start();
// Importing DBConfig.php file.
include 'config.php';
  if(!$_SESSION['email']){
 	header('location: Login.php');
 }
 	else{

// Connecting to MySQL Database.
 $con = mysqli_connect("localhost", "root", "", "reporting");
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Student ID from JSON $obj array and store into $S_ID.
 $email = $_SESSION['email'];
 
 // Creating SQL query and Updating the current record into MySQL database table.
 $Sql_Query = "DELETE FROM incidents WHERE email = '$email'" ;
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record Deleted Successfully.' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
}
?>