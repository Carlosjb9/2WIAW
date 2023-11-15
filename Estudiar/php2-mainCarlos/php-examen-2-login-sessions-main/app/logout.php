<?php
session_start();
if ($_GET['logout'] == "true") {
    session_unset();
  }
header('Location: index.php');

?>