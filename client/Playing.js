import React from 'react'
import NameCard from './NameCard';
import SidePanel from './SidePanel';

const Playing = (props) => {
    const choice1 = props.choices[0];
    const choice2 = props.choices[1];
    return (
        <>
        <div id='game-container'>
            <h1>Click on the name you like better</h1>
            <div id='card-container'>
                <NameCard clickHandler={props.clickHandler} id='left-card' name={choice1}/>
                <NameCard clickHandler={props.clickHandler} id='right-card' name={choice2}/>
            </div>
        </div>
        <SidePanel names={props.favorites}/>
        </>
    )
}

export default Playing;