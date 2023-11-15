<?php
/**
 * Represent the features of every Product
 */
class Product
{
    private $id;
    private $name;
    private $price;
    private $rent;
    private $img;

    function __construct($features)
    {
        $this->id = $features[0];
        $this->name = $features[1];
        $this->price = $features[2];
        $this->rent = $features[3];
        $this->img = $features[4];
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function getRent()
    {
        return $this->rent;
    }

    public function getImg()
    {
        return $this->img;
    }
}
