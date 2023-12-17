import React from 'react';
import brushes from '../json/brushes.json';
import paint from '../json/paint.json';
import paper from '../json/paper.json';
import pencils from '../json/pencils.json';

const Product = ({ name, type, size, shape, material, usage, brand, price, image, alt}) => {
    return (
        <div className="product item">
            <div className="product-img-container">
                <img src={image} alt={alt} className="product-img"></img>
            </div>
            <h2>{name}</h2>
            <p className="product-price">Price: <b>{price}</b></p>
            <button className="cart-btn"><img src="icons/plus-solid.svg" alt="Plus Mark"></img><span> Add to Cart</span></button>
        </div>
    )
}

export default Product;