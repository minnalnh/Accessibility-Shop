import React, { useState, useEffect, useRef } from 'react';

function Settings() {

    const [isBoxVisible, setBoxVisibility] = useState(false);
    const [isChecked, setIsChecked] = useState(null);
    const [isClickDisabled, setClickDisabled] = useState(false);
    const [alertText, setAlertText] = useState();
    const [counter, setCounter] = useState(0);
   
    const overlayRef = useRef(null);
    const contrastRef = useRef(null);
    const shadowRef = useRef(null);
    const tabIndexRef = useRef(null);

    const toggleBoxVisibility = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
        
        if(!isBoxVisible) {
            shadowRef.current.classList.add("shadow-box");

        } else {
            shadowRef.current.classList.remove("shadow-box");
        }
    };

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsChecked(value);
/*
        setCounter((prevCount) => prevCount + 1);

        if(counter === 1 && value ) {
            console.log(counter + " klickat två gånger");
            setCounter(0);
        }*/
    };

    const handleCloseButtonClick = () => {
        setBoxVisibility(false);
        shadowRef.current.classList.remove("shadow-box");
    };

    const resetSettings = () => {
        setIsChecked(null);
    };

    useEffect(() => {
        if(isChecked === "Mouse") {
            overlayRef.current.classList.add("disable-click");
            contrastRef.current.classList.remove("overlay");
            setAlertText("Mouse click is disabled");
            setClickDisabled(true);

        } else if(isChecked === "ColorContrast") {
            contrastRef.current.classList.add("overlay");
            overlayRef.current.classList.remove("disable-click");
            setAlertText("Color contrast has been decreased");

        } else if(isChecked === "FontSize") {
            document.body.style.fontSize = "small"; // funkar inte
            setAlertText("Font size has been decreased");

        } else {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("overlay");
            document.body.style.fontSize = "";
            setAlertText();
            setClickDisabled(false);
        }
    }, [isChecked]);

        return (
            <div className="accessibility">
                <p className="alert-text"><strong>{alertText}</strong></p>
                <div ref={overlayRef} className={`${isChecked ? 'disable-click' : ''}`}></div>
                <div ref={contrastRef} className={`${isChecked ? 'change-contrast' : ''}`}></div>
                <div ref={shadowRef}></div>
                <div ref={tabIndexRef} tabIndex={isChecked === "Keyboard" ? -1 : 0}></div>

                <div className="btn-container">
                    <button className="header-btn accessibility-btn" onClick={toggleBoxVisibility}>Accessibility Settings</button>
                </div>

                {isBoxVisible && (
                    <div className="settings-box">
                        <br />
                        <div className={`box ${isBoxVisible ? "" : "hidden"}`}>

                                <label className="radio-container">
                                <span className="radio-label">Hide button text</span>
                                    <input type="radio" id="hideButtonText" name="setting" value="HideButtonText" checked={isChecked === "HideButtonText"}></input>
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
                                    <button className="close-btn settings-btn" onClick={handleCloseButtonClick}>Close Settings</button>
                                    <button className="reset-btn settings-btn" onClick={resetSettings}>Reset Settings</button>
                                </div>
                        </div>
                    </div>
                )}
            </div>
        );

}

export default Settings;