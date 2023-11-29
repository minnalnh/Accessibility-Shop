import Settings from './Settings';
import ShoppingBag from './ShoppingBag';
import * as React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="flex-container">
                <a href="/" className="logo">Art Supplies</a>
                <div>
                    <Settings />
                </div>
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
                <button className="menu-btn">Menu</button>
                <button className="header-btn">Shopping Bag</button>
            </nav>

            <br />

        </div>
    )
}

export default Header;