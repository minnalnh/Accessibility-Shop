import React, { useState, useRef } from "react";
import Settings from './Settings';
import ShoppingBag from './ShoppingBag';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isBox1Visible, setBox1Visibility] = useState(false);
    const [isBox2Visible, setBox2Visibility] = useState(false);
    const shadowRef = useRef(null);

    const toggleBoxVisibility = (event) => {
        const target = event.target;

        if(!isBox1Visible && target.classList.contains("accessibility-btn")) {
            setBox1Visibility((prevVisibility) => !prevVisibility);
            shadowRef.current.classList.add("shadow-box");

        } else if(!isBox2Visible && target.classList.contains("shopping-btn")) {
            console.log("funkar");
            setBox2Visibility((prevVisibility) => !prevVisibility);
        }
        
        if(isBox1Visible && isBox2Visible) { // om intällningarna inte är synliga före klick
            shadowRef.current.classList.remove("shadow-box");

        } else { // om inställningarna är synliga före klick
            shadowRef.current.classList.remove("shadow-box");
        }
    };

    const handleCloseButtonClick = () => {
        if(isBox1Visible) {
            setBox1Visibility(false);

        } else if(isBox2Visible) {
            setBox2Visibility(false);
        }
        shadowRef.current.classList.remove("shadow-box");
    };

    return (
        <div className="header">
            <div className="flex-container">
                <a href="/" className="logo">Art Supplies</a>
                <Settings
                isBox1Visible={isBox1Visible}
                toggleBoxVisibility={toggleBoxVisibility}
                handleCloseButtonClick={handleCloseButtonClick}
                shadowRef={shadowRef} />
            </div>
            <nav>
                <ul className="navbar">
                    <li>
                        <NavLink to="/brushes">Brushes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/paint">Paint</NavLink>
                    </li>
                    <li>
                        <NavLink to="/paper">Paper</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pencils">Pencils</NavLink>
                    </li>
                </ul>
                <div className="btn-container">
                    <button className="menu-btn"><img src="icons/bars-solid.svg" alt="Menu Bars"></img><span>Menu</span></button>
                    <ShoppingBag
                    isBox2Visible={isBox2Visible}
                    toggleBoxVisibility={toggleBoxVisibility}
                    handleCloseButtonClick={handleCloseButtonClick} />
                </div>
            </nav>
        </div>
    )
}

export default Header;