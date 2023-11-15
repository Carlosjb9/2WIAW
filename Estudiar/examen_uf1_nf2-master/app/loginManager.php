<?php
include 'Class/AuthClass.php';
$login = new Auth($_POST["login"],$_POST["login"]);
if (isset($_SESSION["login"])) {
    header("location:index.php?logged=true"); 
} else {
    header("location:login.php"); 
}
?>