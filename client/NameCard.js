import React from 'react'

const NameCard = (props) => {
    return (
        <div id={props.id} className='name-card'>
            <h2>{props.name}</h2>
        </div>
    )
}

export default NameCard;