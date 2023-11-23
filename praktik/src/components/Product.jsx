import AddToCart from './AddToCart';

const Product = () => {
    return (
        <div className="product item">
            <img src="https://placehold.jp/150x150.png"></img>
            <h2>Product Name</h2>
            <h3>--- kr</h3>
            <AddToCart />
        </div>
    )
}

export default Product;