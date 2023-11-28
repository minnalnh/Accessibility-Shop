import React from 'react';
import brushes from '../json/brushes.json';
import paint from '../json/paint.json';
import paper from '../json/paper.json';
import pencils from '../json/pencils.json';

const Product = ({ name, type, size, shape, material, usage, brand, price, image}) => {
    return (
        <div className="product item">
            <img src="https://placehold.jp/150x150.png"></img>
            <h2>{name}</h2>
            <p className="product-price">Price: <b>{price}</b></p>
            <button className="cart-btn">Add to Cart</button>
        </div>
    )
}

export default Product;