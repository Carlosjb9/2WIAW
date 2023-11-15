<?
require '_header.php';
session_start();
include 'Class/ProductsClass.php';
$products = new Products();
if (!isset($_SESSION['user']) || empty($_SESSION['user'])) {
  header('Location: login.php');
}
?>
  <div class="row">
    <div class="col-lg-3">
      <h1 class="my-4">Resumen</h1>
      <ul class="list-group">
        <li id="quantity" class="list-group-item">
          Total de productos: 
          <?php echo isset($_SESSION['shop'])
              ? sizeOf($_SESSION['shop'])
              : '0'; ?>
        </li>
        <li id="price" class="list-group-item">
          Precio total de productos:
          <?php
          /*
           * For each product in the shop we check if is buy or rent and calculate its price
           */
          $total = 0;
          if (!empty($_SESSION['shop'])) {
              foreach ($_SESSION['shop'] as $element) {
                  $product = $products->getById($element->id);
                  $total +=
                      ($element->action == 'buy'
                          ? $product->getPrice()
                          : $product->getRent()) * $element->quantity;
              }
          }
          echo number_format($total, 2) . '€';
          ?>
        </li>
      </ul>

    </div>
    <!-- /.col-lg-3 -->

    <div class="col-lg-9">
      <div class="row">

        <!-- Por cada producto en el carrito -->
      
        <?php if (empty($_SESSION['shop'])) {
            echo '<p>No products to show</p>';
        } else {
            foreach ($_SESSION['shop'] as $element) {

                /*
                 * For each product in the shop we get all the needed information: action, price, name, etc
                 */
                $product = $products->getById($element->id);
                $priceTotal =
                    ($element->action == 'buy'
                        ? $product->getPrice()
                        : $product->getRent()) * $element->quantity;
                $action = $element->action == 'buy' ? 'Compra' : 'Alquiler';
                ?>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <img class="card-img-top" src="/img/<?php echo $product->getImg(); ?>" alt="<?php echo $product->getName(); ?>">
                <div class="card-body">
                  <h3 class="card-title">
                    <? echo $product->getName() ?>
                  </h3>
                    <p>
                      <?= $action ?> x <?= $element->quantity ?> <br>
                      Total : <?= number_format($priceTotal, 2) . '€' ?>
                    </p>
                </div>
              </div>
            </div>
        <?php
            }
        } ?>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.col-lg-9 -->
  </div>
<?
require '_footer.php';
?>