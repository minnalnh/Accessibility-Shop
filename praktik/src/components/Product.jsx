import React, { useState, useContext, useRef } from 'react';
import { CartContext } from './CartContext';

const Product = ({ id, name, size, material, description, brand, price, image, alt }) => {
    const { addToCart } = useContext(CartContext);
    const [isCartMsgVisible, setCartMsgVisibility] = useState(false);
    const [latestProduct, setLatestProduct] = useState(null);
    const [counter, setCounter] = useState(0);

    const product = { id, name, price, image, alt };

    const handleAddToCart = () => {
        console.log(latestProduct);
        addToCart(product);
        setLatestProduct(product);
        setCounter((prevCounter) => prevCounter + 1);
        setCartMsgVisibility(true);
    }

    const handleCloseButtonClick = () => {
        setCartMsgVisibility(false);
        setCounter(0);
    };

    return (
        <div className="product item">
            <div className="product-img-container">
                <img src={image} alt={alt} className="product-img"></img>
            </div>
            <section className="product-info-container">
                <h2 className="product-name">{name}</h2>
                <p className="product-price">Price: <b>{price} kr</b></p>
                <p className="product-description">{description}</p>
                <div className="cart-btn-container">
                    <button className="cart-btn" onClick={handleAddToCart}><img src="icons/plus-solid.svg" alt="Plus Mark"></img><span> Add to Cart</span></button>
                </div>
            </section>

            {isCartMsgVisible && latestProduct && (
                <div className="cart-msg-box">
                    <span><b>{counter}x {product.name}</b> added to cart</span>
                    <button className="msg-close-btn" onClick={handleCloseButtonClick}><img src="icons/xmark-solid.svg" alt="X Mark" className="icon close-btn"></img><span>Close Message</span></button>
                </div>

            )}
        </div>
    )
}

export default Product;