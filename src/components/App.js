import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="profileEdit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <>
          <input type="text" name="name" id="name-input" placeholder="Имя" className="form__input form__input_type_name" required minLength="2" maxLength="40" />
          <span className="form__input-error" id="name-input-error"></span>
          <input type="text" name="about" id="about-input" placeholder="О себе" className="form__input form__input_type_about" required minLength="2" maxLength="200" />
          <span className="form__input-error" id="about-input-error"></span>
        </>
      </PopupWithForm>
      <PopupWithForm name="сardAdd" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <>
          <input type="text" name="name" id="place-input" placeholder="Название" className="form__input form__input_type_place" required minLength="2" maxLength="30" />
          <span className="form__input-error" id="place-input-error"></span>
          <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку" className="form__input form__input_type_link" required />
          <span className="form__input-error" id="link-input-error"></span>
        </>
      </PopupWithForm>
      <PopupWithForm name="cardDelete" title="Вы уверены?" buttonText="Да">
        <>
        </>
      </PopupWithForm>
      <PopupWithForm name="avatarEdit" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <>
          <input type="url" name="avatar" id="avatarLink-input" placeholder="Ссылка на картинку" className="form__input form__input_type_avatar" required />
          <span className="form__input-error" id="avatarLink-input-error"></span>
        </>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;