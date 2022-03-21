import React from 'react'

const NameCard = (props) => {
    return (
        <div id={props.id} className='name-card' onClick={() => props.clickHandler(props.name)}>
            <h2>{props.name.name}</h2>
        </div>
    )
}

export default NameCard;