import React, { useState, useEffect, useRef } from 'react';

function Settings() {

    const [isBoxVisible, setBoxVisibility] = useState(false);
    const [isChecked, setIsChecked] = useState(null);
    const [isCursorHidden, setCursorHidden] = useState(false);
    const boxRef = useRef(null);

    const toggleBoxVisibility = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
    };

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsChecked(value);
    };

    useEffect(() => {
        if(isChecked === "Mouse") {
            boxRef.current.classList.add("hide-cursor");
            setCursorHidden(true);

        } else {
            boxRef.current.classList.remove("hide-cursor");
            setCursorHidden(false);
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
                <div ref={boxRef} className={`${isChecked ? 'hide-cursor' : ''}`}>test</div>
                <div className="btn-container">
                <button className="header-btn" onClick={toggleBoxVisibility}>Accessibility Settings</button>
                </div>

                {isBoxVisible && (
                    <div className="settings-box">
                        <br />
                        <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                                <label className="radio-container">
                                <span className="radio-label">Audible</span>
                                    <input type="radio" id="audible" name="setting" value="Audible" checked={isChecked === "Audible"} onChange={handleRadioChange}></input>
                                    <span className="custom-radio"></span>
                                </label>
                                <hr />

                                <label className="radio-container">
                                <span className="radio-label">Mouse</span>
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
                                <span className="radio-label">Visible</span>
                                    <input type="radio" id="visible" name="setting" value="Visible" checked={isChecked === "Visible"} onChange={handleRadioChange}></input>
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