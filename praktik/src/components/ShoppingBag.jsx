import React, { useContext } from 'react';
import Product from './Product';
import { CartContext } from './CartContext';

const ShoppingBag = ({ isBox2Visible, toggleBoxVisibility, handleCloseButtonClick }) => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="shopping-bag">
            <button className="header-btn shopping-btn shopping-btn-layout" onClick={toggleBoxVisibility}><img src="icons/bag-shopping-solid.svg" alt="Shopping Bag" className="icon shopping-btn"></img><span className="shopping-btn"> Your Cart</span></button>

            {isBox2Visible && (
                    <div className="shopping-box pop-up" tabIndex="1">
                            <div className="flex-container">
                                <h3 className="your-items">Your Items:</h3>
                                <button className="cart-close-btn cart-close-btn-layout" onClick={handleCloseButtonClick}><img src="icons/xmark-solid.svg" alt="X Mark" className="icon cart-close-btn"></img><span className="cart-close-btn"> Close Cart</span></button>
                            </div>
                            <hr />
                            {cartItems.map((item, index) => (
                                <div key={index}>
                                    <img src={item.image} alt={item.alt} style=
                                    {{ width: "100px", height: "100px" }} />
                                    <button>Remove Item</button>
                                    <br />
                                    {item.name}
                                    <br />
                                    {item.price} kr
                                </div>
                            ))}

                    </div>

            )}

        </div>
    );
};

export default ShoppingBag;