import React, { useState, useRef } from "react";
import Settings from './Settings';
import ShoppingBag from './ShoppingBag';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isBoxVisible, setBoxVisibility] = useState(false);
    const shadowRef = useRef(null);

    const toggleBoxVisibility_1 = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
        
        if(!isBoxVisible) { // If settings box is visible
            shadowRef.current.classList.add("shadow-box");

        } else { // If settings box is not visible
            shadowRef.current.classList.remove("shadow-box");
        }
    };

    const toggleBoxVisibility_2 = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
        
        if(!isBoxVisible) { // If settings box is visible
            shadowRef.current.classList.add("shadow-box");

        } else { // If settings box is not visible
            shadowRef.current.classList.remove("shadow-box");
        }
    };

    const handleCloseButtonClick = () => {
        setBoxVisibility(false);
        shadowRef.current.classList.remove("shadow-box");
    };

    return (
        <div className="header">
            <div className="flex-container">
                <a href="/" className="logo">Art Supplies</a>
                <Settings
                isBoxVisible={isBoxVisible}
                toggleBoxVisibility_1={toggleBoxVisibility}
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
                    isBoxVisible={isBoxVisible}
                    toggleBoxVisibility_2={toggleBoxVisibility}
                    handleCloseButtonClick={handleCloseButtonClick} />
                </div>
            </nav>
        </div>
    )
}

export default Header;