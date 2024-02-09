@extends('layout.tutorial')
@section('content')
<main class="container">
    <div class="content">
        <h1>Insert new Product</h1>
        <form action="/product/create" method="post">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter name product">
            </div>
            <div class="form-group">
                <label for="Description">Description</label>
                <input type="text" class="form-control" id="description" placeholder="Product description">
            </div>
            <div class="form-group">
                <label for="Description">Price</label>
                <input type="text" class="form-control" id="price" placeholder="Product Price">
            </div>
            <div class="form-group">
                <label for="category">Select Category</label>
                <select class="form-control" id="category">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="image">Product Image</label>
                <input type="file" class="form-control-file" id="image">
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
</main>
@endsection