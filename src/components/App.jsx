import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./ImagePopup/ImagePopup.jsx";
import { useCallback, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js"
import api from "../utils/api.js"
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup/EditAvatarPopup.jsx";
import AddPlacePopup from "./AddPlacePopup/AddPlacePopup.jsx";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);
  const [isLoadingCards, setIsLoadingCards] = useState(true);
  const [deleteCardId, setDeleteCardId] = useState('');


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setEventListenerForEsc()
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setEventListenerForEsc()
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setEventListenerForEsc()
  }

  function handleDeleteClick(cardId) {
    setDeleteCardId(cardId);
    setIsDeletePopupOpen(true);
    setEventListenerForEsc()
  }

  function setEventListenerForEsc() {
    document.addEventListener('keydown', handleClosePopupByEsc)
  }

  const setStatesforClosingPopups = useCallback (() => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeletePopupOpen(false);
  }, [])

  const handleClosePopupByEsc = useCallback ((evt) => {
    if (evt.key === 'Escape') {
      setStatesforClosingPopups();
      document.removeEventListener('keydown', handleClosePopupByEsc)
    }
  }, [setStatesforClosingPopups])

  const handleClosePopups = useCallback(() => {
    setStatesforClosingPopups();
    document.removeEventListener('keydown', handleClosePopupByEsc)
  }, [setStatesforClosingPopups, handleClosePopupByEsc])

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
    setEventListenerForEsc()
  }
  
  useEffect(() => {
    setIsLoadingCards(true);
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCards]) => {
        setCurrentUser(dataUser);
        setCards(dataCards);
        setIsLoadingCards(false)
      })
      .catch((err) => {console.error(err)})
  },[])

  function handleDeleteCard(evt) {
    evt.preventDefault();
    setIsSubmit(true);
    api.deleteCard(deleteCardId)
      .then(() => {
        setCards(cards.filter(element => {
          return element._id !== deleteCardId
        }))
        handleClosePopups();
        setIsSubmit(false)
      })
      .catch((err) => {console.error(err)})
      .finally(() => setIsSubmit(false))
  }

  function handleUpdateUser(dataUser, reset) {
    setIsSubmit(true);
    api.setUserInfo(dataUser)
      .then(res => {
        setCurrentUser(res);
        handleClosePopups();
        reset();
        setIsSubmit(false)
      })
      .catch((err) => {console.error(err)})
      .finally(() => setIsSubmit(false))
  }

  function handleUpdateAvatar(dataUser, reset) {
    setIsSubmit(true);
    api.setNewAvatar(dataUser)
      .then(res => {
        setCurrentUser(res)
        handleClosePopups()
        reset()
        setIsSubmit(false)
      })
      .catch((err) => {console.error(err)})
      .finally(() => setIsSubmit(false))
  }

  function handleAddPlaceSubmit(dataCard, reset) {
    setIsSubmit(true);
    api.addCard(dataCard)
      .then((res) => {
        setCards([res, ...cards])
        handleClosePopups()
        reset()
        setIsSubmit(false)
      })
      .catch((err) => {console.error(err)})
      .finally(() => setIsSubmit(false))
  }

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        
        <Header/>

        <Main
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onOpenCard = {handleCardClick}
          onDelete = {handleDeleteClick}
          cards = {cards}
          loadingCards = {isLoadingCards}
        />

        <Footer/>

        <EditProfilePopup
          onUpdateUser = {handleUpdateUser}
          isOpen = {isEditProfilePopupOpen}
          onClose = {handleClosePopups}
          isSubmit = {isSubmit}
        />

        <AddPlacePopup
          onAddPlace = {handleAddPlaceSubmit}
          isOpen = {isAddPlacePopupOpen}
          onClose = {handleClosePopups}
          isSubmit = {isSubmit}
        />

        <EditAvatarPopup
          isOpen = {isEditAvatarPopupOpen}
          onClose = {handleClosePopups}
          onUpdateAvatar = {handleUpdateAvatar}
          isSubmit = {isSubmit}
        />

        <PopupWithForm
          name='delete'
          title='Вы уверены?'
          titleButton='Да'
          isOpen={isDeletePopupOpen}
          onClose={handleClosePopups}
          onSubmit={handleDeleteCard}
          isSubmit={isSubmit}
        />

        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={handleClosePopups}/>
      </div>
    </CurrentUserContext.Provider>
  </>

  );
}

export default App;
