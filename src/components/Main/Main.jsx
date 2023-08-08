import editLogo from '../../images/editbutton-vector.svg';
import addLogo from '../../images/addbutton-vector.svg';
import { useEffect, useState } from 'react';
import api from '../../utils/api';
import Card from '../Card/Card.jsx';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onOpenCard}) {
    const [cards, setCards] = useState([]);
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        Promise.all([api.getInfo(), api.getCards()])
            .then(([dataUser, dataCards]) => {
                setUserName(dataUser.name)
                setUserDescription(dataUser.about)
                setUserAvatar(dataUser.avatar)
                dataCards.forEach(data => data.myid = dataUser._id)
                setCards(dataCards)
            })
            .catch((err) => {console.error(err)})
    },[])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <button type="button" className="profile__avatar-overlay" onClick={onEditAvatar} />
                    <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                    type="button"
                    aria-label="кнопка редактирования"
                    className="profile__edit-button"
                    onClick={onEditProfile}
                    >
                    <img
                        className="profile__edit-button-image"
                        src={editLogo}
                        alt="кнопка редактирование"
                    />
                    </button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button
                    type="button"
                    aria-label="кнопка добавления"
                    className="profile__add-button"
                    onClick={onAddPlace}
                >
                    <img
                    className="profile__add-button-image"
                    src={addLogo}
                    alt="кнопка добавления"
                    />
                </button>
            </section>
            <ul className="elements">
                {cards.map(data => {
                    return (
                        <li className="element" key = {data._id}>
                            <Card card={data} onOpenCard={onOpenCard} />
                        </li>
                    ) 
                })}
            </ul>
        </main>
    )
}