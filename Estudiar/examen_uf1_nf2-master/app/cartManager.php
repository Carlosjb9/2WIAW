<?php
session_start();

if (empty($_SESSION['shop'])) {
    //IF ITS THE FIRST TIME WE INIZIALIZE THE SHOP CART
    $_SESSION['shop'] = [];
}

if (isset($_POST['id']) && isset($_POST['action'])) {
    //WE STORE IN THE ARRAY AN OBJECT OF THE SELECTED PRODUCT, IF IS BUY OR RENT AND DE QUANTITY
    $_SESSION['shop'][] = (object) [
        'id' => $_POST['id'],
        'action' => $_POST['action'],
        'quantity' => $_POST['quantity']
    ];
}

header('Location: index.php#' . $_POST['id']);
