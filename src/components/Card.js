import React from 'react';
import '../index.css';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }  

    return (
        <li className="element">
            <div className="element__grid">
                <img onClick={handleClick} className="element__image" src={`${props.card.link}`} alt={`${props.card.name}`} />
                <button type="button" className="element__trash-button"></button>
            </div>
            <div className="element__info">
                <h2 className="element__name">{props.card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__like-button"></button>
                    <p className="element__like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card; 