<?php
include 'ProductClass.php';
include 'FileClass.php';
/**
 * With this Class we manage the Products when we need to list them or to show a single one
 */
class Products
{
    private $producList = [];

    function __construct()
    {
        $this->loadProducts();
    }

    public function loadProducts()
    {
        $fileManager = new File();
        foreach ($fileManager->getAttributes() as $product) {
            $this->producList[] = new Product($product);
        }
    }
    public function getById($id)
    {
        //Filter the products by the given id
        foreach ($this->producList as $product) {
            if ($product->getID() == $id) {
                return $product;
            }
        }
    }
    public function getList()
    {
        return $this->producList;
    }
}
