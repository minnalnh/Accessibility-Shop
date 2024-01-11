import React, { createContext, useState } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [counters, setCounters] = useState({});

    const addToCart = (item) => {
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
        
        if (!isItemInCart) {    // om produkten lades till för första gången i varukorgen
            setCartItems((prevItems) => [...prevItems, item]);
            setCounters((prevCounters) => ({...prevCounters, [item.id]: (prevCounters[item.id] || 0) + 1}));

        } else {    // om produkten redan fanns i varukorgen
            setCounters((prevCounters) => ({...prevCounters, [item.id]: (prevCounters[item.id] || 0) + 1}));
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, counters, setCounters, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };