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
                <Dropdown.Item as={NavLink} to="/fan-brushes" className="dropdown-item">Fan Brushes
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/round-brushes" className="dropdown-item">
                    Round Brushes
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/flat-brushes" className="dropdown-item">
                    Flat Brushes
                </Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Paint">
            <Dropdown.Item as={NavLink} to="/acrylic-paint" className="dropdown-item">
                Acrylic Paint
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/oil-paint" className="dropdown-item">
                Oil Paint
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/watercolor-paint" className="dropdown-item">
                Watercolor Paint
            </Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Paper">
            <Dropdown.Item as={NavLink} to="/watercolor-paper" className="dropdown-item">
                Watercolor Paper
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/drawing-paper" className="dropdown-item">
                Drawing Paper
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/canvas-paper" className="dropdown-item">
                Canvas Paper
            </Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Pencils">
            <Dropdown.Item as={NavLink} to="/graphite-pencils" className="dropdown-item">
                Graphite Pencils
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/colored-pencils" className="dropdown-item">
                Colored Pencils
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/charcoal-pencils" className="dropdown-item">
                Charcoal Pencils
            </Dropdown.Item>
            </DropdownButton>

                <div className="btn-container">
                    <div>
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