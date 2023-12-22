import React, { createContext, useState } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
        
        if (!isItemInCart) {
            setCartItems((prevItems) => [...prevItems, item]);

        } else {
            console.log(`Item with id ${item.id} is already in the cart`);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };