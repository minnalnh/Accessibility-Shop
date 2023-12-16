import React, { useState, useRef } from 'react';

const ShoppingBag = ({ isBox2Visible, toggleBoxVisibility, handleCloseButtonClick, shadowRef }) => {
    return (
        <div className="shopping-bag">
            <button className="header-btn shopping-btn" onClick={toggleBoxVisibility}><img src="icons/bag-shopping-solid.svg" alt="Shopping Bag" className="icon"></img><span>Shopping Bag</span></button>

            {isBox2Visible && (
                    <div className="shopping-box pop-up" tabIndex="1">
                        <br />
                        <div className={`box ${isBox2Visible ? "" : "hidden"}`}>
                            <div className="flex-container">
                                <h3 className="your-items">Your Items:</h3>
                                <button className="close-btn"><span>Close</span></button>
                            </div>
                            <hr />

                        </div>


                    </div>

            )}

        </div>
    )
}

export default ShoppingBag;