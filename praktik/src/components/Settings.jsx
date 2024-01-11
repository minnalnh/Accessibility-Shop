import React, { useState, useEffect, useRef } from 'react';
import "../App.css";

function Settings({ isBox1Visible, toggleBoxVisibility, handleCloseButtonClick, shadowRef }) {

    const [isChecked, setIsChecked] = useState(null);
    const [isClickDisabled, setClickDisabled] = useState(false);
    const [alertText, setAlertText] = useState();
    const [isTabDisabled, setIsTabDisabled] = useState(false);

    const overlayRef = useRef(null);
    const contrastRef = useRef(null);

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsChecked(value);
    };

    const resetSettings = () => {
        setIsChecked(null);
        setIsTabDisabled(false);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Tab' && isTabDisabled) {
            event.preventDefault();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
                window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isTabDisabled]);

    useEffect(() => {
        if(isChecked === "Mouse") {
            overlayRef.current.classList.add("disable-click");
            contrastRef.current.classList.remove("overlay");

            setAlertText("Mouse click is disabled");
            setClickDisabled(true);

        } else if(isChecked === "ColorContrast") {
            contrastRef.current.classList.add("overlay");
            overlayRef.current.classList.remove("disable-click");

            window.removeEventListener("keydown", handleKeyPress);
            document.body.classList.remove("img-size");
            document.body.classList.remove("change-font-size");
            document.body.classList.remove("hide-btn-text");

            setAlertText("Color contrast has been decreased");

        } else if(isChecked === "FontSize") {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");

            document.body.classList.remove("img-size");
            document.body.classList.add("change-font-size");
            document.body.classList.remove("hide-btn-text");
            window.removeEventListener("keydown", handleKeyPress);

            setAlertText("Font size has been decreased");

        } else if(isChecked === "HideButtonText") {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");

            window.removeEventListener("keydown", handleKeyPress);
            document.body.classList.remove("img-size");
            document.body.classList.add("hide-btn-text");
            document.body.classList.remove("change-font-size");

            setAlertText("Button text is hidden");

        } else if(isChecked === "imgSize") {
            document.body.classList.add("img-size");
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");

            window.removeEventListener("keydown", handleKeyPress);
            document.body.classList.add("hide-btn-text");
            document.body.classList.remove("change-font-size");

            setAlertText("Image size has been decreased")

        } else if(isChecked === "Keyboard") {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");

            document.body.classList.remove("img-size");
            document.body.classList.remove("change-font-size");
            document.body.classList.remove("hide-btn-text");

            window.removeEventListener("keydown", handleKeyPress);
            document.body.classList.remove("img-size");
            document.body.classList.remove("change-font-size");
            document.body.classList.remove("hide-btn-text");

            setIsTabDisabled(true);

            setAlertText("Keyboard navigation is disabled");

        } else {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");

            document.body.classList.remove("img-size");
            document.body.classList.remove("hide-btn-text");
            document.body.classList.remove("change-font-size");
            window.removeEventListener("keydown", handleKeyPress);
  
            setAlertText("");
            setClickDisabled(false);

        }
    }, [isChecked]);

        return (
            <div>
                <span className="alert-text"><strong>{alertText}</strong></span>
                <div ref={overlayRef} className={`${isChecked ? 'disable-click' : ''}`}></div>
                <div ref={contrastRef} className={`${isChecked ? 'change-contrast' : ''}`}></div>
                <div ref={shadowRef}></div>

                <div className="btn-container">
                    <button className="header-btn accessibility-btn accessibility" onClick={toggleBoxVisibility}><img src="icons/gear-solid.svg" alt="Gear" className="icon accessibility"></img> Accessibility Settings</button>
                </div>

                {isBox1Visible && (
                    <div className="settings-box pop-up" tabIndex="1">

                        <div className="flex-container">
                            <button className="reset-btn settings-btn" onClick={resetSettings}><img src="icons/rotate-left-solid.svg" alt="Reverse" className="icon"></img> Reset Settings</button>

                            <button className="close-btn settings-btn" onClick={handleCloseButtonClick} tabIndex="1"><img src="icons/xmark-solid.svg" alt="X Mark" className="icon"></img> Close Settings</button>
                        </div>
                            
                        <br />
                            <label className="radio-container">
                            <span className="radio-label">Hide button text</span>
                                <input type="radio" id="hideButtonText" name="setting" value="HideButtonText" checked={isChecked === "HideButtonText"} onChange={handleRadioChange}></input>
                                <span className="custom-radio"></span>
                            </label>
                            <hr />

                            <label className="radio-container">
                            <span className="radio-label">Decrease font size</span>
                                <input type="radio" id="fontSize" name="setting" value="FontSize" checked={isChecked === "FontSize"} onChange={handleRadioChange}></input>
                                <span className="custom-radio"></span>
                            </label>
                            <hr />

                            <label className="radio-container">
                            <span className="radio-label">Decrease image size</span>
                                <input type="radio" id="imgSize" name="setting" value="imgSize" checked={isChecked === "imgSize"} onChange={handleRadioChange}></input>
                                <span className="custom-radio"></span>
                            </label>
                            <hr />

                            <label className="radio-container">
                            <span className="radio-label">Decrease color contrast</span>
                                <input type="radio" id="colorContrast" name="setting" value="ColorContrast" checked={isChecked === "ColorContrast"} onChange={handleRadioChange}></input>
                                <span className="custom-radio"></span>
                            </label>
                            <hr />

                            <label className="radio-container">
                            <span className="radio-label">Disable mouse click</span>
                                <input type="radio" id="mouse" name="setting" value="Mouse" checked={isChecked === "Mouse"} onChange={handleRadioChange}></input>
                                <span className="custom-radio"></span>
                            </label>
                            <hr />
                            <label className="radio-container">
                            <span className="radio-label">Disable keyboard navigation</span>
                                <input type="radio" id="keyboard" name="setting" value="Keyboard" checked={isChecked === "Keyboard"} onChange={handleRadioChange}></input>
                                <span className="custom-radio"></span>
                            </label>
                    </div>
                )}
            </div>
        );

}

export default Settings;