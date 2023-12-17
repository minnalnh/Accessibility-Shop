import React, { useState, useRef } from 'react';
import Product from './Product';

const ShoppingBag = ({ isBox2Visible, toggleBoxVisibility, handleCloseButtonClick, shadowRef }) => {
    return (
        <div className="shopping-bag">
            <button className="header-btn shopping-btn shopping-btn-layout" onClick={toggleBoxVisibility}><img src="icons/bag-shopping-solid.svg" alt="Shopping Bag" className="icon shopping-btn"></img><span className="shopping-btn"> Your Cart</span></button>

            {isBox2Visible && (
                    <div className="shopping-box pop-up" tabIndex="1">
                            <div className="flex-container">
                                <h3 className="your-items">Your Items:</h3>
                                <button className="bag-close-btn-layout" onClick={handleCloseButtonClick}><img src="icons/xmark-solid.svg" alt="X Mark" className="icon bag-close-btn"></img><span className="bag-close-btn"> Close Cart</span></button>
                            </div>
                            <hr />


                    </div>

            )}

        </div>
    )
}

export default ShoppingBag;