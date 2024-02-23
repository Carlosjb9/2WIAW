@extends('layout.tutorial')
@section('content')
<main class="container">
    <div class="content">
        <h1>Products List</h1>
        <ul id="productsList" class="list-group">
            @foreach ($products as $product)
                <div>
                    <img src={{ $product->image }} width="200"/>
                    <h4>{{ $product->name }}</h4>
                    <p>{{ $product->description }}
                    <p>{{ $product->price }}€</p>
                    <label>{{ $product->category }}</label>
                </div>
            @endforeach
        </ul>
    </div>
</main>
@endsection 