<div class="row mt-5">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a id="" href="#"><img class="card-img-top" src="/img/" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#"></a>
              </h4>
              <h5>Compra: 
                
                 €<br>Alquiler: 
              
              €</h5>
              <p class="card-text">Descripcion</p>
            </div>
            <div class="card-footer">
              <form action="cartManager.php" method="POST" class="addCart">
                <input type="hidden" name="id" value="">
                <input type="hidden" name="action" value="buy">
                <button type="submit" class="btn-block btn-primary">Comprar</button>
                <input type="number" name="quantity" value="1">
              </form>
              <br>
              <form action="cartManager.php" method="POST" class="addCart">
                <input type="hidden" name="id" value="">
                <input type="hidden" name="action" value="rent">
                <button type="submit" class="btn-block btn-primary">Alquilar</button>
                <input type="number" name="quantity" value="1">
              </form>
            </div>
          </div>
        </div>
    </div>
<?
require '_footer.php';
?>