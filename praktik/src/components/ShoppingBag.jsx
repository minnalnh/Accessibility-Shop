import React, { useState, useRef } from 'react';

const ShoppingBag = () => {

    const [isBoxVisible, setBoxVisibility] = useState(false);

    const toggleBoxVisibility = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
        /*
        if(!isBoxVisible) { // If settings box is visible
            shadowRef.current.classList.add("shadow-box");

        } else { // If settings box is not visible
            shadowRef.current.classList.remove("shadow-box");
        }
        */
    };

    return (
        <div className="shopping-bag">
            <button className="header-btn" onClick={toggleBoxVisibility}><img src="icons/bag-shopping-solid.svg" alt="Shopping Bag" className="icon"></img><span>Shopping Bag</span></button>

            {isBoxVisible && (
                    <div className="shopping-box pop-up" tabIndex="1">
                        <br />
                        <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
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