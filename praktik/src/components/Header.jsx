import React, { useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Settings from './Settings';
import ShoppingCart from './ShoppingCart';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
    const [isBox1Visible, setBox1Visibility] = useState(false);
    const [isBox2Visible, setBox2Visibility] = useState(false);
    const shadowRef = useRef(null);
    const location = useLocation();

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

    const getBreadcrumbTrail = () => {
        const pathArray = location.pathname.split('/').filter(Boolean);
        const breadcrumbTrail = [];

        pathArray.forEach((path, index) => {
            const pathUrl = `/${pathArray.slice(0, index + 1).join('/')}`;
            breadcrumbTrail.push({
                name: path.charAt(0).toUpperCase() + path.slice(1),
                url: pathUrl,
            });
        });

        return breadcrumbTrail;
    };

    const breadcrumbTrail = getBreadcrumbTrail();

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

            <DropdownButton id="dropdown-basic-button" title="Brushes">
                <Dropdown.Item><NavLink to="/fan-brushes" className="dropdown-content">Fan Brushes</NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink to="/round-brushes" className="dropdown-content">Round Brushes</NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink to="/flat-brushes" className="dropdown-content">Flat Brushes</NavLink></Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Paint">
            <Dropdown.Item><NavLink to="/acrylic-paint" className="dropdown-content">Acrylic Paint</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/oil-paint" className="dropdown-content">Oil Paint</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/watercolor-paint" className="dropdown-content">Watercolor Paint</NavLink></Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Paper">
            <Dropdown.Item><NavLink to="/watercolor-paper" className="dropdown-content">Watercolor Paper</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/drawing-paper" className="dropdown-content">Drawing Paper</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/canvas-paper" className="dropdown-content">Canvas Paper</NavLink></Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Pencils">
            <Dropdown.Item><NavLink to="/graphite-pencils" className="dropdown-content">Graphite Pencils</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/colored-pencils" className="dropdown-content">Colored Pencils</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/charcoal-pencils" className="dropdown-content">Charcoal Pencils</NavLink></Dropdown.Item>
            </DropdownButton>

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

            <div className="breadcrumb">
                {breadcrumbTrail.map((item, index) => (
                    <span key={index}>
                        {index > 0 && <span className="breadcrumb-separator"> / </span>}
                        <NavLink className="home-page-breadcrumb" to="/">Home Page </NavLink><NavLink to={item.url}>{item.name}</NavLink>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Header;