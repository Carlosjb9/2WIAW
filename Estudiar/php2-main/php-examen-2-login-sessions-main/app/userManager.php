<?php
include("Class/AuthClass.php");
session_start();
$current_user = new Auth($_GET['login'], $_GET['password']);
$prueba = $current_user->login();

if ($current_user->login()) {
    $_SESSION['user'] = $current_user->getUser();
    header('Location: index.php');
} else  {
    header('Location: login.php');
}

?>