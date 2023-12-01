import React, { useState, useEffect, useRef } from 'react';

function Settings() {

    const [isBoxVisible, setBoxVisibility] = useState(false);
    const [isChecked, setIsChecked] = useState(null);
    const [isClickDisabled, setClickDisabled] = useState(false);
    const [alertText, setAlertText] = useState();

    const overlayRef = useRef(null);
    const contrastRef = useRef(null);

    const toggleBoxVisibility = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
    };

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsChecked(value);
    };

    useEffect(() => {
        if(isChecked === "Mouse") {
            overlayRef.current.classList.add("disable-click");
            contrastRef.current.classList.remove("change-contrast");
            setAlertText("Mouse click is disabled");
            setClickDisabled(true);

        } else if(isChecked === "ColorContrast") {
            contrastRef.current.classList.add("change-contrast");
            overlayRef.current.classList.remove("disable-click");
            setAlertText("The color contrast has been decreased");

        } else {
            overlayRef.current.classList.remove("disable-click");
            contrastRef.current.classList.remove("change-contrast");
            setAlertText("");
            setClickDisabled(false);

        }
    }, [isChecked]);
/*
    useEffect(() => {
        if(isChecked) {
            console.log("icheckad");
        }
    })
*/
    const handleButtonClick = () => {
        setBoxVisibility(false);
    };

    const resetSettings = () => {
        setIsChecked(null);
    }

        return (
            <div className="accessibility">
                <p className="alert-text">{alertText}</p>
                <div ref={overlayRef} className={`${isChecked ? 'disable-click' : ''}`}></div>
                <div ref={contrastRef} className={`${isChecked ? 'change-contrast' : ''}`}></div>
                <div className="btn-container">
                    <button className="header-btn accessibility-btn" onClick={toggleBoxVisibility}>Accessibility Settings</button>
                </div>

                {isBoxVisible && (
                    <div className="settings-box">
                        <br />
                        <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                                <label className="radio-container">
                                <span className="radio-label">Decrease font size</span>
                                    <input type="radio" id="font-size" name="setting" value="FontSize" checked={isChecked === "FontSize"} onChange={handleRadioChange}></input>
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
                                <span className="radio-label">Keyboard</span>
                                    <input type="radio" id="keyboard" name="setting" value="Keyboard" checked={isChecked === "Keyboard"} onChange={handleRadioChange}></input>
                                    <span className="custom-radio"></span>
                                </label>
                                <hr />

                                <label className="radio-container">
                                <span className="radio-label">Decrease color contrast</span>
                                    <input type="radio" id="colorContrast" name="setting" value="ColorContrast" checked={isChecked === "ColorContrast"} onChange={handleRadioChange}></input>
                                    <span className="custom-radio"></span>
                                </label>
                                <hr />
                                <div className="flex-container">
                                    <button className="close-btn settings-btn" onClick={handleButtonClick}>Close Settings</button>
                                    <button className="reset-btn settings-btn" onClick={resetSettings}>Reset Settings</button>
                                </div>
                        </div>
                    </div>
                )}
            </div>
        );

}

export default Settings;