import React, { useState } from 'react';

function Settings() {

    const [isBoxVisible, setBoxVisibility] = useState(false);

    const toggleBoxVisibility = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
    };

        return (
            <div className="accessibility">
                <button className="header-btn" onClick={toggleBoxVisibility}>Accessibility</button>

                {isBoxVisible && (
                    <div className="settings-box">
                    <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                        <form>
                            <label class="radio-container">
                            <span class="radio-label">Audible</span>
                                <input type="radio" id="audible" name="setting" value="Audible"></input>
                                <span class="custom-radio"></span>
                            </label>
                            <hr />

                            <label class="radio-container">
                            <span class="radio-label">Mouse</span>
                                <input type="radio" id="mouse" name="setting" value="Mouse"></input>
                                <span class="custom-radio"></span>
                            </label>
                            <hr />

                            <label class="radio-container">
                            <span class="radio-label">Keyboard</span>
                                <input type="radio" id="keyboard" name="setting" value="Keyboard"></input>
                                <span class="custom-radio"></span>
                            </label>
                            <hr />

                            <label class="radio-container">
                            <span class="radio-label">Visible</span>
                                <input type="radio" id="visible" name="setting" value="Visible"></input>
                                <span class="custom-radio"></span>
                            </label>
                            <hr />

                            <label class="radio-container">
                            <span class="radio-label">Visible</span>
                                <input type="radio" id="visible" name="setting" value="Visible"></input>
                                <span class="custom-radio"></span>
                            </label>
                        </form>
                    </div>
                    </div>
                )}
            </div>
        );
    

}

export default Settings;