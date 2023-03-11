import React from 'react';
import '../index.css';
import avatar from '../images/black.jpg';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState(avatar);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardArray]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);

                setCards(cardArray);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div onClick={props.onEditAvatar} className="profile__image-container">
                        <img className="profile__image" src={`${userAvatar}`} alt="Фото" />
                    </div>
                    <div>
                        <div className="profile__grid">
                            <h1 className="profile__title">{userName}</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
            </section>
            <section>
                <ul className="elements">
                    {cards.map((item) => {
                        return (
                            <Card card={item} key={item._id} onCardClick={props.onCardClick} />
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Main;