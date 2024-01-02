import React, { createContext, useState } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [counters, setCounters] = useState({});

    const addToCart = (item) => {
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
        
        if (!isItemInCart) {
            setCartItems((prevItems) => [...prevItems, item]);
            setCounters((prevCounters) => ({...prevCounters, [item.id]: (prevCounters[item.id] || 0) + 1}));

        } else {
            setCounters((prevCounters) => ({...prevCounters, [item.id]: (prevCounters[item.id] || 0) + 1}));
            console.log(`Item with id ${item.id} is already in the cart`);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, counters, setCounters, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };