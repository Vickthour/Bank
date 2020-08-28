<?php
session_start();
include('config.php');

if(!$_SESSION['email']){
	header('location: Login.php');
}else{
 
 $email = $_SESSION['email'];

 mysqli_query($con,"update user_reg set status='Offline' where email='$email'");
session_destroy();
$logout = 'Sucessfully Logged Out';
header('location: Login.php');

$logout = json_encode($logout);
}
?>