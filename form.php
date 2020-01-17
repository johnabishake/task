<!DOCTYPE html>
<html>
<head>
<title>Redirect Form To a Particular Page On Submit - Demo Preview</title>
<meta content="noindex, nofollow" name="robots">
<link href='form.css' rel='stylesheet' type='text/css'> 
</head>
<body>
<div class="main">
<div class="first">
<form action="form.php" id="#form" method="post" name="#form">
<label>Name</label>
<input id="name" name="name" placeholder='Your Name' type='text'>
<label>Email</label>
<input id="name" name="name" placeholder='Your Name' type='text'>
<label>Password</label>
<input id="address" name="address" placeholder='Address' type='text' value="">
<input id='btn' name="submit" type='submit' value='Submit'>

<?php
include "include/redirect.php";
?>
</form>
</div>
</div>
</body>
</html>