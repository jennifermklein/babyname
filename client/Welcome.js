import React from 'react'

const Welcome = (props) => {
    return (
        <div id='welcome-box' onClick={props.clickHandler}>
            <h1 id='logo-top'>EENIE</h1>
            <h1 id='logo-bottom'>MEENIE</h1>
        </div>
    )
}

export default Welcome;