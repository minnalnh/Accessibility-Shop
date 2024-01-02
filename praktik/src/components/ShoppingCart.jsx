import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';

const ShoppingCart = ({ isBox2Visible, toggleBoxVisibility, handleCloseButtonClick }) => {
    const { cartItems, setCartItems, counters, setCounters } = useContext(CartContext);
    const [price, setPrice] = useState([]);
    const [totalSum, setTotalSum] = useState(0);

    useEffect(() => {
        const newPrice = cartItems.map(item => item.price);
        setPrice(newPrice);

        const newTotalSum = newPrice.reduce((sum, itemPrice, index) => {
            const item = cartItems[index];
            return sum + itemPrice * (counters[item.id] || 1);
        }, 0);
        setTotalSum(newTotalSum);

    }, [cartItems, counters]);

    const removeItem = (index) => {
        const currentCartItems = [...cartItems];
        const removedItem = currentCartItems[index];

        setCounters((prevCounters) => {
            const updatedCounters = { ...prevCounters };

            if(updatedCounters[removedItem.id] && updatedCounters[removedItem.id] > 1) {
                updatedCounters[removedItem.id]--;

            } else {
                delete updatedCounters[removedItem.id];

                currentCartItems.splice(index, 1);
                setCartItems(currentCartItems);
            }
            
            return updatedCounters;
        })

        const updatedCartItems = currentCartItems.filter((_, i) => i !== index);
        setCartItems(currentCartItems);
    };

    return (
        <div className="shopping-cart">
            <button className="header-btn shopping-btn shopping-btn-layout" onClick={toggleBoxVisibility}><img src="icons/bag-shopping-solid.svg" alt="Shopping Bag" className="icon shopping-btn"></img><span className="shopping-btn"> Your Cart</span></button>

            {isBox2Visible && (
                    <div className="shopping-box pop-up" tabIndex="1">
                            <div className="flex-container">
                                <h3 className="your-items">Your Items:</h3>
                                <button className="cart-close-btn cart-close-btn-layout" onClick={handleCloseButtonClick}><img src="icons/xmark-solid.svg" alt="X Mark" className="icon cart-close-btn"></img><span className="cart-close-btn"> Close Cart</span></button>
                            </div>
                    {cartItems.length === 0 ? (
                        <p className="cart-empty-msg">Your cart is empty</p>
                    ) : (
                    <>
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-flex-container">
                                <img src={item.image} alt={item.alt} style={{ width: "100px", height: "85px" }} className="cart-img" />
                                <div className="cart-item-info">
                                {item.name}
                                <br />
                                Price: <b>{item.price * counters[item.id]} kr</b>
                                <br />
                                Quantity: {counters[item.id] || 1}
                                </div>
                                <button className="cart-remove-btn" onClick={() => removeItem(index)}><img src="icons/minus-solid.svg" alt="Minus Mark" className="icon cart-close-btn"></img><span> Remove Item</span></button>
                            </div>
                        ))}
                    </div>
                    <p className="total-sum">Total sum: {totalSum} kr</p>
                    <button className="checkout-btn"><img src="icons/cash-register-solid.svg" alt="Cash Register" className="icon shopping-btn"></img><span> Checkout</span></button>
                    </>
                    )}
                    </div>

            )}

        </div>
    );
};

export default ShoppingCart;