<?php
	session_start();
// Importing Config.php file.
include 'config.php';
 
// Creating connection.
 $con = mysqli_connect("localhost", "root", "", "reporting");
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];

//Applying User Login query with email and password match.
$Sql_Query = "SELECT * FROM user_reg WHERE email = '$email' and password = '$password'";

// Executing SQL Query.
$check = mysqli_num_rows(mysqli_query($con,$Sql_Query));

 if(($check=='1') && ($email || $password != "")){
        while($user2 = mysqli_fetch_array($con,$Sql_Query)){

            $_SESSION['id'] = clean($user2['id']);// creating email as session
            $_SESSION['name'] = $user2['name'];// creating email as session
            $_SESSION['email'] = $user2['email'];
            session_write_close(); // creating email as session
 			mysqli_query($con,"update user_reg set status='Online' where email='$email'");
 $SuccessLoginMsg = 'Data Matched';
 }
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson; 
             
 }
 else{
 
 // If the record inserted successfully then show the message.
$InvalidMSG = 'Invalid Username or Password! Please Try Again Or Sign Up!!' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon;

 
 }
 
 mysqli_close($con);
?>