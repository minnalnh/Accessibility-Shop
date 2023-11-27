import brushes from '../json/brushes.json';
import paint from '../json/paint.json';
import paper from '../json/paper.json';
import pencils from '../json/pencils.json';

const Product = () => {
    return (
        <div className="product item">
            <img src="https://placehold.jp/150x150.png"></img>
            <h2>insert</h2>
            <h3>--- kr</h3>
            <button className="cart-btn">Add to Cart</button>
        </div>
    )
}

export default Product;