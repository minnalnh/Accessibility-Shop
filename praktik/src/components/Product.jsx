import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ id, name, type, size, shape, material, description, brand, price, image, alt }) => {
    const { addToCart } = useContext(CartContext);

    const [isCartMsgVisible, setCartMsgVisibility] = useState(false);

    const addedToCartMsg = () => {
        
        if(isCartMsgVisible === false) {
            setCartMsgVisibility((prevVisibility) => !prevVisibility);
        } 
    }

    const handleAddToCart = () => {
        addToCart({ id, name, price, image, alt });
        addedToCartMsg();
    }

    return (
        <div className="product item">
            <div className="product-img-container">
                <img src={image} alt={alt} className="product-img"></img>
            </div>
            <section className="product-info-container">
                <h2>{name}</h2>
                <p className="product-price">Price: <b>{price} kr</b></p>
                <button className="cart-btn" onClick={handleAddToCart}><img src="icons/plus-solid.svg" alt="Plus Mark"></img><span> Add to Cart</span></button>
            </section>

            {isCartMsgVisible && (
                <div className="cart-msg-box">
                    <span>Added to your cart</span>
                    <button className="close-btn close-btn-layout"><img src="icons/xmark-solid.svg" alt="X Mark" className="icon close-btn"></img>Close</button>
                </div>

            )}
        </div>
    )
}

export default Product;