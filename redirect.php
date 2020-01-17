<?php
if(isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$dob = $_POST['dob'];
$password = $_POST['password'];
if($name !=''&& $email !=''&& $dob !=''&& $password !='')
{
header("Location:profileinex.html");
}
else{
?><span><?php echo "Please fill all fields.....!!!!!!!!!!!!";?></span> <?php
}
}
?>