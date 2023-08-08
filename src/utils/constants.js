// const initialCards = [
//     {
//         title: 'Архыз',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//         title: 'Челябинская область',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//         title: 'Иваново',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//         title: 'Камчатка',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//         title: 'Холмогорский район',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//         title: 'Байкал',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     }
// ];

const editButton = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popupEdit');
const popupAdd = document.querySelector('.popupAdd');
const popupAvatar = document.querySelector('.popupAvatar');
const buttonAvatar = document.querySelector('.profile__avatar-overlay');
const newCardForm = document.querySelector('.popupAdd__form');
const editForm = document.querySelector('.popupEdit__form');
const avatarForm = document.querySelector('.popupAvatar__form');
const templateSelector = "#card";
const popupProfileSelector = '.popupEdit';
const popupAddCardSelector = '.popupAdd';
const popupImageSelector = '.popupImage';
const containerSelector = '.elements';
const popupAvatarEdit = '.popupAvatar';
const popupDeleteSelector = '.popupDelete';
const configUser = {
    nameProfileSelector: '.profile__name',
    jobProfileSelector: '.profile__description',
    avatarProfileSelector: '.profile__avatar'
};
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible'
};

export {
    // initialCards,
    editButton,
    buttonAdd,
    popupEdit,
    popupAdd,
    popupAvatar,
    buttonAvatar,
    newCardForm,
    editForm,
    avatarForm,
    templateSelector,
    popupProfileSelector,
    popupAddCardSelector,
    popupImageSelector,
    containerSelector,
    popupAvatarEdit,
    popupDeleteSelector,
    configUser,
    validationConfig
};