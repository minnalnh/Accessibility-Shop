import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuButton = ({ isBox3Visible, toggleBoxVisibility, handleCloseButtonClick }) => {

    return (
        <div className="menu-button">
            <button className="header-btn menu-btn" onClick={toggleBoxVisibility}><img src="icons/bars-solid.svg" alt="Menu" className="icon menu-btn"></img><span className="menu-btn"> Menu</span></button>

            {isBox3Visible && (
                    <div className="menu-box">
                        <button className="close-btn close-btn-layout" onClick={handleCloseButtonClick}><img src="icons/xmark-solid.svg" alt="X Mark" className="icon close-btn"></img><span className="close-btn"> Close Menu</span></button>

                        <ul>
                            <li>
                                <b>Brushes</b>
                                <ul>
                                    <li className="menu-li"><NavLink to="/fan-brushes">Fan Brushes</NavLink></li>
                                    <li className="menu-li"><NavLink to="/round-brushes">Round Brushes</NavLink></li>
                                    <li className="menu-li"><NavLink to="/flat-brushes">Flat Brushes</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <b>Paint</b>
                                <ul>
                                    <li className="menu-li"><NavLink to="/acrylic-paint">Acrylic Paint</NavLink></li>
                                    <li className="menu-li"><NavLink to="/oil-paint">Oil Paint</NavLink></li>
                                    <li className="menu-li"><NavLink to="/watercolor-paint">Watercolor Paint</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <b>Paper</b>
                                <ul>
                                    <li className="menu-li"><NavLink to="/watercolor-paper">Watercolor Paper</NavLink></li>
                                    <li className="menu-li"><NavLink to="/drawing-paper">Drawing Paper</NavLink></li>
                                    <li className="menu-li"><NavLink to="/canvas-paper">Canvas Paper</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <b>Pencils</b>
                                <ul>
                                    <li className="menu-li"><NavLink to="/graphite-pencils">Graphite Pencils</NavLink></li>
                                    <li className="menu-li"><NavLink to="/colored-pencils">Colored Pencils</NavLink></li>
                                    <li className="menu-li"><NavLink to="/charcoal-pencils">Charcoal Pencils</NavLink></li>
                                </ul>
                            </li>
                    </ul>

            
                    </div>

            )}
        </div>
    );
};

export default MenuButton;