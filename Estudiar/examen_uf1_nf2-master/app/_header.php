<!doctype html>
<?php
header("Content-type: text/css");
?>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Product List</title>
  <!-- Styles & JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <link href="assets/style.css" rel="stylesheet">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>

<body>
  
  <!-- session -->
  <!-- Navigation -->
  <nav class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">Tienda</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <span id="carrito" class="nav-link" href="#">Numero de productos:
            </span> 
          </li>
          <li class="nav-item active"> <a class="nav-link" href="cartManager.php?clear=true">Vaciar carrito |
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="resumen.php">Finalizar compra
            </a>
          </li>
        </ul>

      </div>
      <div class="my-2 my-sm-0">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"> 
            <a class="nav-link" href="">USUARIO</a>
          </li>
          <li class="nav-item"> 
            <a class="nav-link" href="">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Page Content -->
  <div class="container mt-5">

