import React from 'react'

const SettingsBox = (props) => {
    return (
        <div id='settings-box'>
            <h2>Settings</h2>
            <form>
                <input type="range" min='1900' max="2022" name="year-selector"></input>
            <div className='options'>
                <label htmlFor="girl">girl:</label>
                <input type="radio" name="girl" id="girl"></input>
                <label htmlFor="boy">boy:</label>
                <input type="radio" name="boy"></input>
                <label htmlFor="both">both:</label>
                <input type="radio" name="both"></input>
            </div>
                <input id='submit-settings' type='submit' onClick={props.submitHandler}></input>
            </form>
        </div>
    )
}

export default SettingsBox;