<?
require '_header.php';
?>
  <div class="row">
    <div class="col-lg-3">
      <h1 class="my-4">Resumen</h1>
      <ul class="list-group">
        <li id="quantity" class="list-group-item">
          Total de productos: 
        </li>
        <li id="price" class="list-group-item">
          Precio total de productos:
        </li>
      </ul>

    </div>
    <!-- /.col-lg-3 -->

    <div class="col-lg-9">
      <div class="row">

        <!-- Por cada producto en el carrito -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <img class="card-img-top" src="/img/" alt="">
                <div class="card-body">
                  <h3 class="card-title">
                  </h3>
                    <p>
                      Total :
                    </p>
                </div>
              </div>
            </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.col-lg-9 -->
  </div>
<?
require '_footer.php';
?>