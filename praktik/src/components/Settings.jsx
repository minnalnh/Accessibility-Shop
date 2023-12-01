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
            console.log(boxRef);
        }
    }, [isChecked]);

    const handleButtonClick = () => {
        setBoxVisibility(false);
    };

    const resetSettings = () => {
        setIsChecked(null);
    }

        return (
            <div className="accessibility">
                <div ref={boxRef} className={`${isChecked ? 'hide-cursor' : ''}`}>test</div>
                <button className="header-btn" onClick={toggleBoxVisibility}>Accessibility Settings</button>

                {isBoxVisible && (
                    <div className="settings-box">
                        <button className="close-btn settings-btn" onClick={handleButtonClick}>Close Settings</button>
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
                                <button className="reset-btn settings-btn" onClick={resetSettings}>Reset Settings</button>
                        </div>
                    </div>
                )}
            </div>
        );

}

export default Settings;



/*

const box = document.querySelector(".test");
box.classList.add("hide-cursor");

.hide-cursor {
    cursor : none;
}

*/