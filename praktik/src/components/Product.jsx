import React, { useState } from 'react';
import brushes from '../json/brushes.json';
import paint from '../json/paint.json';
import paper from '../json/paper.json';
import pencils from '../json/pencils.json';
import ShoppingBag from './ShoppingBag';
//import { addToCart } from './ShoppingBag';

const Product = ({ name, type, size, shape, material, description, brand, price, image, alt}) => {
/* onClick={() => addToCart({ name, price, image, alt })} */

    return (
        <div className="product item">
            <div className="product-img-container">
                <img src={image} alt={alt} className="product-img"></img>
            </div>
            <h2>{name}</h2>
            <p className="product-price">Price: <b>{price} kr</b></p>
            <button className="cart-btn"><img src="icons/plus-solid.svg" alt="Plus Mark"></img><span> Add to Cart</span></button>
        </div>
    )
}

export default Product;