<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::redirect('/', '/product/list');


Route::get('/product/create', function () {
    return view('product.create')->with('msg');
});

Route::post('/product/newProduct', [ProductsController::class, 'createProduct'], function () {
    
    return redirect()->route('/product/create', ['msg' => "newProduct"]);
});


//Route::get('/products/lista', [ProductsController::class, 'showList'])->name('listaProductos');

Route::get('/product/list', function () {
    $products = array();

    $p1 = array("image"=>"https://ae01.alicdn.com/kf/S5509f2113e9f4b4bbb075ac70cce24f01/Peluche-de-oso-de-peluche-con-cuerpo-musculoso-para-ni-o-y-ni-a-almohada-Huggable.jpg", "name"=>"Producto 1", "description"=>"el oso más fuerte", "price"=>10, "category"=>"animal");
    $p2 = array("image"=>"https://i.pinimg.com/originals/50/e4/c5/50e4c5d1e244474323dad4f4e3f8b108.png", "name"=>"Producto 2", "description"=>"el oso más gordo", "price"=>20, "category"=>"animal");

    //Transformamos los arrays en objeto
    //Convertimos $product["name"] a $product->name

    array_push($products, (object)$p1) ;
    array_push($products, (object)$p2) ;
    return view('product.list')->with('products', $products);
})->name('product_list');