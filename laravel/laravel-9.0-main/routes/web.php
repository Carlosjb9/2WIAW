<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/product/list', function () {
    $products = array();

    $p1 = array("name"=>"Producto 1","price"=>10);
    $p2 = array("name"=>"Producto 2","price"=>20);

    //Transformamos los arrays en objeto
    //Convertimos $product["name"] a $product->name

    array_push($products, (object)$p1) ;
    array_push($products, (object)$p2) ;
    return view('product.list')->with('products', $products);
    return view('product.list');
})->name('product_list');

Route::get('/product/create', function () {
    return view('product.create');
});

Route::post('/product/create', function () {
    
    return redirect()->route('/product/create', ['msg' => "newProduct"]);
});