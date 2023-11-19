import Settings from './Settings';
import * as React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>Art Supplies</h1>

            <div>
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
            </nav>

        </div>
    )
}

export default Header;