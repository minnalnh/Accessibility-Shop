import React, { useState } from 'react';

const CartProduct = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        console.log("Product added to cart: ", product);
    }

    return (
        <div className="cart-product">
            {addToCart}
        </div>
    );
};
export default CartProduct;