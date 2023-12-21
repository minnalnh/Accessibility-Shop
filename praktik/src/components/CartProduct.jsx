import React, { useState } from 'react';
import Product from './Product';
import ShoppingBag from './ShoppingBag';

const CartProduct = ({ cartItems }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        console.log("Product added to cart: ", product);
    }
    return (

    );
};
export default CartProduct;

/*
    return (
        <div className="cart-product">
            <h4>Your Cart:</h4>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.alt} className="cart-item-img" />
                            <div className="cart-item-details">
                                <p>{item.name}</p>
                                <p>Price: {item.price} kr</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
*/