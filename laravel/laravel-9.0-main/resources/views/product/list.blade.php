@extends('layout.tutorial')
@section('content')
<main class="container">
    <div class="content">
        <h1>Products List</h1>
        <ul id="productsList" class="list-group">
            @foreach ($products as $product)
                <li class="list-group-item">{{$product->name}} - {{$product->price}}€</li>
            @endforeach
        </ul>
    </div>
</main>
@endsection