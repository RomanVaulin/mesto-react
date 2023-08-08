import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./ImagePopup/ImagePopup.jsx";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleClosePopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  // function handleDeleteClick() {

  // }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
    // setEventListenersForDocument()
  }

  return (
    <>
    <div className="page">
      
      <Header/>

      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onOpenCard = {handleCardClick}
      />

      <Footer/>

      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        isOpen = {isEditProfilePopupOpen}
        onClose = {handleClosePopups}
      >
        <input
            name="username"
            id="user-name-card"
            required
            minLength={2}
            maxLength={40}
            type="text"
            placeholder="Имя пользователя"
            className="popup__input popupEdit__field popupEdit__field_name_input"
        />
        <span id="user-name-card-error" className="popup__input-error" />
        <input
            name="job"
            id="job-card"
            required
            minLength={2}
            maxLength={200}
            type="text"
            placeholder="Род деятельности"
            className="popup__input popupEdit__field popupEdit__field_description_input"
        />
        <span id="job-card-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name='add-card'
        title='Новое место'
        titleButton='Создать'
        isOpen = {isAddPlacePopupOpen}
        onClose = {handleClosePopups}
      >
        <input
            name="name"
            id="name-card"
            required
            minLength={2}
            maxLength={30}
            type="text"
            placeholder="Название"
            className="popup__input popupAdd__field popupAdd__field_place_input"
        />
        <span id="name-card-error" className="popup__input-error" />
        <input
            name="link"
            id="url-card"
            required
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popupAdd__field popupAdd__field_link_input"
        />
        <span id="url-card-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name='edit-avatar'
        title='Обновить аватар'
        isOpen = {isEditAvatarPopupOpen}
        onClose = {handleClosePopups}
      >
        <input
            name="avatar"
            id="url-avatar"
            required
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popupAvatar__field popupAvatar__field_link_input"
        />
        <span id="url-avatar-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name='delete'
        title='Вы уверены?'
        titleButton='Да'
      />

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose = {handleClosePopups}/>
    </div>
  </>

  );
}

export default App;
