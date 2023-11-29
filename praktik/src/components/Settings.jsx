import React, { useState } from 'react';

function Settings() {

    const [isBoxVisible, setBoxVisibility] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const toggleBoxVisibility = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
    };

    const handleRadioChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleButtonClick = () => {
        setBoxVisibility(false);
        setIsChecked(false);
    };

        return (
            <div className="accessibility">
                <button className="header-btn" onClick={toggleBoxVisibility}>Accessibility Settings</button>

                {isBoxVisible && (
                    <div className="settings-box">
                        <button className="close-btn" onClick={handleButtonClick}>Close</button>
                        <br />
                        <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                            <form>
                                <label class="radio-container">
                                <span class="radio-label">Audible</span>
                                    <input type="radio" id="audible" name="setting" value="Audible" checked={isChecked} onChange={handleRadioChange}></input>
                                    <span class="custom-radio"></span>
                                </label>
                                <hr />

                                <label class="radio-container">
                                <span class="radio-label">Mouse</span>
                                    <input type="radio" id="mouse" name="setting" value="Mouse" checked={isChecked} onChange={handleRadioChange}></input>
                                    <span class="custom-radio"></span>
                                </label>
                                <hr />

                                <label class="radio-container">
                                <span class="radio-label">Keyboard</span>
                                    <input type="radio" id="keyboard" name="setting" value="Keyboard" checked={isChecked} onChange={handleRadioChange}></input>
                                    <span class="custom-radio"></span>
                                </label>
                                <hr />

                                <label class="radio-container">
                                <span class="radio-label">Visible</span>
                                    <input type="radio" id="visible" name="setting" value="Visible" checked={isChecked} onChange={handleRadioChange}></input>
                                    <span class="custom-radio"></span>
                                </label>
                                <hr />

                                <label class="radio-container">
                                <span class="radio-label">Font Size</span>
                                    <input type="radio" id="font-size" name="setting" value="Font Size" checked={isChecked} onChange={handleRadioChange}></input>
                                    <span class="custom-radio"></span>
                                </label>
                                <p>{isChecked ? 'Radio is checked' : 'Radio is not checked'}</p>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
    

}

export default Settings;