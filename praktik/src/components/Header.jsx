import React, { useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Settings from './Settings';
import ShoppingCart from './ShoppingCart';
import MenuButton from './MenuButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
    const [isBox1Visible, setBox1Visibility] = useState(false);
    const [isBox2Visible, setBox2Visibility] = useState(false);
    const [isBox3Visible, setBox3Visibility] = useState(false);
    const shadowRef = useRef(null);
    const location = useLocation();

    const toggleBoxVisibility = (event) => {
        const target = event.target;

        if(target.classList.contains("accessibility")) {

            if(isBox1Visible === false) {
                setBox1Visibility((prevVisibility) => !prevVisibility);
                shadowRef.current.classList.add("shadow-box");

                setBox2Visibility(false);
                setBox3Visibility(false);

            } else if(isBox1Visible === true) {
                setBox1Visibility(false);
                shadowRef.current.classList.remove("shadow-box");
            }

        } else if(target.classList.contains("shopping-btn")) {
    
            if(isBox2Visible === false) {
                setBox2Visibility((prevVisibility) => !prevVisibility);
                shadowRef.current.classList.add("shadow-box");

                setBox1Visibility(false);
                setBox3Visibility(false);

            } else if(isBox2Visible === true) {
                setBox2Visibility(false);
                shadowRef.current.classList.remove("shadow-box");
            }

        } else if(target.classList.contains("menu-btn")) {

            if(isBox3Visible === false) {
                setBox3Visibility((prevVisibility) => !prevVisibility);
                shadowRef.current.classList.add("shadow-box");

                setBox1Visibility(false);
                setBox2Visibility(false);

            } else if(isBox3Visible === true) {
                setBox3Visibility(false);
                shadowRef.current.classList.remove("shadow-box");
            }

        }

    };

    const handleCloseButtonClick = (event) => {
        const target = event.target;

        if(target.classList.contains("close-btn") && isBox1Visible === true) {
            setBox1Visibility(false);
            shadowRef.current.classList.remove("shadow-box");

        } else if(target.classList.contains("close-btn") && isBox2Visible === true) {
            setBox2Visibility(false);
            shadowRef.current.classList.remove("shadow-box");

        } else if(target.classList.contains("close-btn") && isBox3Visible === true) {
            setBox3Visibility(false);
            shadowRef.current.classList.remove("shadow-box");
        }
    };

    const customRouteName = (name) => {
        const strings = name.split('-');
        return strings.map((string, index) => (
            index === 0 || index === 1 ? string.charAt(0).toUpperCase() + string.slice(1) : string
            )).join(' ');
    };
    
    const getBreadcrumbTrail = () => {
        const pathArray = location.pathname.split('/').filter(Boolean);
        const breadcrumbTrail = [];

        pathArray.forEach((path, index) => {
            const pathUrl = `/${pathArray.slice(0, index + 1).join('/')}`;
            breadcrumbTrail.push({
                name: customRouteName(path),
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
                <Dropdown.Item className="dropdown-item"><NavLink to="/fan-brushes" className="dropdown-content">Fan Brushes</NavLink></Dropdown.Item>
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
                    <div className="menu-button">
                        <MenuButton isBox3Visible={isBox3Visible}
                            toggleBoxVisibility={toggleBoxVisibility}
                            handleCloseButtonClick={handleCloseButtonClick}
                            shadowRef={shadowRef} />
                        </div>
                    <div className="shopping-btn">
                        <ShoppingCart
                            isBox2Visible={isBox2Visible}
                            toggleBoxVisibility={toggleBoxVisibility}
                            handleCloseButtonClick={handleCloseButtonClick}
                            shadowRef={shadowRef} />
                    </div>
                </div>

                <div className="breadcrumb">
                {breadcrumbTrail.map((item, index) => (
                    <span key={index}>
                        {index > 0 && <span className="breadcrumb-separator"> / </span>}
                        <NavLink className="home-page-breadcrumb" to="/">Home Page &rarr; </NavLink><NavLink to={item.url} className="breadcrumb-navlink"><b>{item.name}</b></NavLink>
                    </span>
                ))}
                </div>
            </nav>
        </div>
    )
}

export default Header;