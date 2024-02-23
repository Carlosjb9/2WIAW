<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductsController extends Controller
{
    public function createProduct() {

    }
    
    public function showList()
    {
        //Consulta ELoquent
        $products = Product::all();
        return view('product.list', ['products'=>$products]);
    }

    public function seed(){
        Product::factory()->count(10)->create();
    }
}