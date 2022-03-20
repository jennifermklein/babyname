import React from 'react'
import NameCard from './NameCard';
import SidePanel from './SidePanel';

const Playing = (props) => {
    return (
        <>
        <div id='game-container'>
            <h1>Click on the name you like better</h1>
            <div id='card-container'>
                <NameCard id='left-card' name={props.names[0]}/>
                <NameCard id='right-card' name={props.names[1]}/>
            </div>
        </div>
        <SidePanel names={props.names}/>
        </>
    )
}

export default Playing;