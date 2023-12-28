import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ id, name, type, size, shape, material, description, brand, price, image, alt }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product item">
            <div className="product-img-container">
                <img src={image} alt={alt} className="product-img"></img>
            </div>
            <h2>{name}</h2>
            <p className="product-price">Price: <b>{price} kr</b></p>
            <button className="cart-btn" onClick={() => addToCart({ id, name, price, image, alt })}><img src="icons/plus-solid.svg" alt="Plus Mark"></img><span> Add to Cart</span></button>
        </div>
    )
}

export default Product;