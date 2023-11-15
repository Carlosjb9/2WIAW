<?php
include("Class/AuthClass.php");
session_start();
$user = new Auth($_GET["login"], $_GET["password"]);
if ($user->login()) {
    $_SESSION["user"] = $user->getUser();
    header("Location: index.php" );
} else {
    header("Location: login.php" );
}
?>