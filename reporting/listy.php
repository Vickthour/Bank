<?php
	session_start();
include 'config.php';
 
 if($_SESSION["email"]){
 	header('location: Login.php');
 }
 	else{
// Create connection
$con = new mysqli("localhost", "root", "", "reporting");
 
if ($con->connect_error) {
 
 die("Connection failed: " . $con->connect_error);
} 
 
 $email=$_SESSION['email'];
// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM incidents WHERE email = '$email' ";
 
$result = $con->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);
 
 }
 
}else {
$lomor = "No Results Found.";
 $json = json_encode($lomor);
}
 echo $json;
$con->close();
}
?>