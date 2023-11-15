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

    }
    public function getById($id)
    {
        //Filter the products by the given id

    }
    public function getList()
    {
        return;
    }
}
