import React from 'react'
import './card.style.css';

export function Card(props) {
    return (
        <div className='card-container'>
            <img
            alt="monster"
            src={`https://robohash.org/${props.monster.id}?set=set2?size=200x200`}
            />
            <h2>{props.monster.name}</h2>
            {props.monster.email}
        </div>
    )
}


