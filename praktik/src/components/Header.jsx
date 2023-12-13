import React, { useRef } from "react";
import Settings from './Settings';
import ShoppingBag from './ShoppingBag';
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <div className="flex-container">
                <a href="/" className="logo">Art Supplies</a>
                <Settings />
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
                    <button className="header-btn"><img src="icons/bag-shopping-solid.svg" alt="Shopping Bag" className="icon"></img><span>Shopping Bag</span></button>
                </div>
            </nav>
        </div>
    )
}

export default Header;