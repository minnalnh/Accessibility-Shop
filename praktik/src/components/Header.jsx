import React, { useRef } from "react";
import Settings from './Settings';
import SlideShow from "./SlideShow";
import ShoppingBag from './ShoppingBag';
import { NavLink } from "react-router-dom";

const Header = () => {

    const btnTextRef = useRef(null);

    return (
        <div className="header">
            <div className="flex-container">
                <a href="/" className="logo">Art Supplies</a>
                <Settings btnTextRef={btnTextRef} />
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
                    <button className="menu-btn"><img src="icons/bars-solid.svg" alt="Menu Bars"></img><span ref={btnTextRef}>Menu</span></button>
                    <button className="header-btn"><img src="icons/bag-shopping-solid.svg" alt="Shopping Bag" className="icon"></img><span ref={btnTextRef}>Shopping Bag</span></button>
                </div>
            </nav>
        </div>
    )
}

export default Header;