import React, { useState, useRef } from "react";
import Settings from './Settings';
import ShoppingCart from './ShoppingCart';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isBox1Visible, setBox1Visibility] = useState(false);
    const [isBox2Visible, setBox2Visibility] = useState(false);
    const shadowRef = useRef(null);

    const toggleBoxVisibility = (event) => {
        const target = event.target;

        if(target.classList.contains("accessibility-btn")) {

            if(isBox1Visible === false) {
                setBox1Visibility((prevVisibility) => !prevVisibility);
                shadowRef.current.classList.add("shadow-box");

            } else if(isBox1Visible === true) {
                setBox1Visibility(false);
                shadowRef.current.classList.remove("shadow-box");

            }

        } else if(target.classList.contains("shopping-btn")) {
    
            if(isBox2Visible === false) {
                setBox2Visibility((prevVisibility) => !prevVisibility);
                shadowRef.current.classList.add("shadow-box");

            } else if(isBox2Visible === true) {
                setBox2Visibility(false);
                shadowRef.current.classList.remove("shadow-box");
            }

        }
    };

    const handleCloseButtonClick = (event) => {
        const target = event.target;

        if(target.classList.contains("close-btn") && isBox1Visible === true) {
            setBox1Visibility(false);
            shadowRef.current.classList.remove("shadow-box");

        } else if(target.classList.contains("cart-close-btn") && isBox2Visible === true) {
            setBox2Visibility(false);
            shadowRef.current.classList.remove("shadow-box");
        }
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
            <nav className="flex-container">
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
                    <div className="shopping-btn">
                        <ShoppingCart
                        isBox2Visible={isBox2Visible}
                        toggleBoxVisibility={toggleBoxVisibility}
                        handleCloseButtonClick={handleCloseButtonClick} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;