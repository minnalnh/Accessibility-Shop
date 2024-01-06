import React, { createContext, useState, useEffect } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [counters, setCounters] = useState({});

    const addToCart = (item) => {
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
        
        if (!isItemInCart) {    // om produkten precis lades till för första gången
            setCartItems((prevItems) => [...prevItems, item]);
            setCounters((prevCounters) => ({...prevCounters, [item.id]: (prevCounters[item.id] || 0) + 1}));
            console.log("not empty");

        } else {    // om produkten redan fanns i varukorgen
            setCounters((prevCounters) => ({...prevCounters, [item.id]: (prevCounters[item.id] || 0) + 1}));
            console.log("empty");
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, counters, setCounters, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };