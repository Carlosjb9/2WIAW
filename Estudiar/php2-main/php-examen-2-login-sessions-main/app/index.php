<?
require '_header.php';
include 'Class/ProductsClass.php';
$products = new Products();
if (!isset($_SESSION['user']) || empty($_SESSION['user'])) {
  header('Location: login.php');
}
?>

    <div class="row mt-5">
      <?php
      if (empty($products->getList())) {
          echo '<p>No products to show</p>';
      } else {
          foreach ($products->getList() as $product) { ?>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a id="<?php echo $product->getName(); ?>" href="#"><img class="card-img-top" src="/img/<?php echo $product->getImg(); ?>" alt="<?php echo $product->getName(); ?>"></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#"><?php echo $product->getName(); ?></a>
              </h4>
              <h5>Compra: 
                <?php echo number_format($product->getPrice(), 2); ?>
                 €<br>Alquiler: 
                <?php echo number_format($product->getRent(), 2); ?> 
              €</h5>
              <p class="card-text">Descripcion</p>
            </div>
            <div class="card-footer">
              <form action="cartManager.php" method="POST" class="addCart">
                <input type="hidden" name="id" value="<?php echo $product->getId(); ?>">
                <input type="hidden" name="action" value="buy">
                <button type="submit" class="btn-block btn-primary">Comprar</button>
                <input type="number" name="quantity" value="1">
              </form>
              <br>
              <form action="cartManager.php" method="POST" class="addCart">
                <input type="hidden" name="id" value="<?php echo $product->getId(); ?>">
                <input type="hidden" name="action" value="rent">
                <button type="submit" class="btn-block btn-primary">Alquilar</button>
                <input type="number" name="quantity" value="1">
              </form>
            </div>
          </div>
        </div>
      <?php }
      }
      ?>
    </div>
<?
require '_footer.php';
?>