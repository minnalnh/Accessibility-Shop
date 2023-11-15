import React, { useState } from 'react';

function Settings() {

    const [isBoxVisible, setBoxVisibility] = useState(false);

    const toggleBoxVisibility = () => {
        setBoxVisibility((prevVisibility) => !prevVisibility);
    };

        return (
            <div className="accessibility">
                <button className="settings-btn" onClick={toggleBoxVisibility}>Settings</button>

                {isBoxVisible && (
                    <div className="settings-box">
                    <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                        <form>
                            <input type="radio" id="audible" name="audible-setting" value="Audible"></input>
                            <label for="audible">Audible</label>
                            <input type="radio" id="mouse" name="mouse-setting" value="Mouse"></input>
                            <label for="mouse">Mouse</label>
                            <input type="radio" id="keyboard" name="keyboard-setting" value="Keyboard"></input>
                            <label for="keyboard">Keyboard</label>
                            <input type="radio" id="visible" name="visible-setting" value="Visible"></input>
                            <label for="visible">Visible</label>
                        </form>
                    </div>
                    </div>
                )}
            </div>
        );
    

}

export default Settings;