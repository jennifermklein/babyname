import React from 'react'
import NameCard from './NameCard';
import SidePanel from './SidePanel';

const Playing = (props) => {
    const names=props.names;
    const idx1 = props.nameIdxs[0];
    const idx2 = props.nameIdxs[1];
    return (
        <>
        <div id='game-container'>
            <h1>Click on the name you like better</h1>
            <div id='card-container'>
                <NameCard clickHandler={props.clickHandler} id='left-card' name={names[idx1]}/>
                <NameCard clickHandler={props.clickHandler} id='right-card' name={names[idx2]}/>
            </div>
        </div>
        <SidePanel names={props.favorites}/>
        </>
    )
}

export default Playing;