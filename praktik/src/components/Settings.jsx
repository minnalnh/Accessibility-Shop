import React, { useState, useEffect, useRef } from 'react';
import "../App.css";

function Settings({ isBox1Visible, toggleBoxVisibility, handleCloseButtonClick, shadowRef }) {

    //const [isBoxVisible, setBoxVisibility] = useState(false);
    const [isChecked, setIsChecked] = useState(null);
    const [isClickDisabled, setClickDisabled] = useState(false);
    const [alertText, setAlertText] = useState();
    const [counter, setCounter] = useState(0);

    const overlayRef = useRef(null);
    const contrastRef = useRef(null);
    //const shadowRef = useRef(null);
/*
    const toggleBoxVisibility = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
        
        if(!isBoxVisible) { // If settings box is visible
            shadowRef.current.classList.add("shadow-box");

        } else { // If settings box is not visible
            shadowRef.current.classList.remove("shadow-box");
        }
    };
*/
    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsChecked(value);

        setCounter((prevCount) => prevCount + 1);

        if(counter === 1 && value ) {
            console.log("klickat " + counter + " gånger");
            setCounter(0);
        }
    };
/*
    const handleCloseButtonClick = () => {
        setBoxVisibility(false);
        shadowRef.current.classList.remove("shadow-box");
    };
*/
    const resetSettings = () => {
        setIsChecked(null);
    };

    const handleKeyPress = (event) => {
        if(event.key === "Tab") {
            event.preventDefault();
        }
    }

    useEffect(() => {
        if(isChecked === "Mouse") {
            overlayRef.current.classList.add("disable-click");
            contrastRef.current.classList.remove("overlay");

            window.removeEventListener("keydown", handleKeyPress);
            document.body.classList.remove("change-font-size");
            document.body.classList.remove("hide-btn-text");

            setAlertText("Mouse click is disabled");
            setClickDisabled(true);

        } else if(isChecked === "ColorContrast") {
            contrastRef.current.classList.add("overlay");
            overlayRef.current.classList.remove("disable-click");

            window.removeEventListener("keydown", handleKeyPress);
            document.body.classList.remove("change-font-size");
            document.body.classList.remove("hide-btn-text");

            setAlertText("Color contrast has been decreased");

        } else if(isChecked === "FontSize") {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");
            document.body.classList.add("change-font-size");
            document.body.classList.remove("hide-btn-text");
            window.removeEventListener("keydown", handleKeyPress);

            setAlertText("Font size has been decreased");

        } else if(isChecked === "Keyboard") {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");
            window.addEventListener("keydown", handleKeyPress); // inaktiverar även musklick

            document.body.classList.remove("change-font-size");
            document.body.classList.remove("hide-btn-text");

            setAlertText("Keyboard navigation is disabled");

        } else if(isChecked === "HideButtonText") {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");

            window.removeEventListener("keydown", handleKeyPress);
            document.body.classList.add("hide-btn-text");
            document.body.classList.remove("change-font-size");

            setAlertText("Button text is hidden");

        } else if(isChecked === "HideAltText") {
            document.body.classList.add("hide-alt");
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");

            window.removeEventListener("keydown", handleKeyPress);
            document.body.classList.add("hide-btn-text");
            document.body.classList.remove("change-font-size");

        } else {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");

            document.body.classList.remove("hide-btn-text");
            window.removeEventListener("keydown", handleKeyPress);
  
            setAlertText("");
            setClickDisabled(false);
        }
    }, [isChecked]);

        return (
            <div className="accessibility">
                <span className="alert-text"><strong>{alertText}</strong></span>
                <div ref={overlayRef} className={`${isChecked ? 'disable-click' : ''}`}></div>
                <div ref={contrastRef} className={`${isChecked ? 'change-contrast' : ''}`}></div>
                <div ref={shadowRef}></div>

                <div className="btn-container">
                    <button className="header-btn accessibility-btn" onClick={toggleBoxVisibility}><img src="icons/gear-solid.svg" alt="Gear" className="icon"></img>Accessibility Settings</button>
                </div>

                {isBox1Visible && (
                    <div className="settings-box pop-up" tabIndex="1">
                        <br />
                        <div className={`box ${isBox1Visible ? "" : "hidden"}`}>

                                <label className="radio-container">
                                <span className="radio-label">Hide alt text</span>
                                    <input type="radio" id="hideAltText" name="setting" value="HideAltText" checked={isChecked === "HideAltText"} onChange={handleRadioChange}></input>
                                    <span className="custom-radio"></span>
                                </label>
                                <hr />

                                <label className="radio-container">
                                <span className="radio-label">Hide button text</span>
                                    <input type="radio" id="hideButtonText" name="setting" value="HideButtonText" checked={isChecked === "HideButtonText"} onChange={handleRadioChange}></input>
                                    <span className="custom-radio"></span>
                                </label>
                                <hr />

                                <label className="radio-container">
                                <span className="radio-label">Decrease font size</span>
                                    <input type="radio" id="font-size" name="setting" value="FontSize" checked={isChecked === "FontSize"} onChange={handleRadioChange}></input>
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
                                <hr />

                                <div className="flex-container">
                                    <button className="close-btn settings-btn" onClick={handleCloseButtonClick}><img src="icons/xmark-solid.svg" alt="X Mark" className="icon"></img>Close Settings</button>
                                    <button className="reset-btn settings-btn" onClick={resetSettings}><img src="icons/rotate-left-solid.svg" alt="Reverse" className="icon"></img>Reset Settings</button>
                                </div>
                        </div>
                    </div>
                )}
            </div>
        );

}

export default Settings;