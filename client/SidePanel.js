import React from 'react'

const SidePanel = (props) => {
    return (
        <div id='side-panel'>
            <h2>Favorite Names</h2>
            <div id='name-list'>
                {props.names.map((name,idx) => <p key={idx}>{name.name}</p>)}
            </div>
        </div>
    )
}

export default SidePanel;