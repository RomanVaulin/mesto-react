export default function PopupImage({card, isOpen, onClose}) {
    return (
      <div className={`popup popupImage ${isOpen && 'popup_opened'}`}>
        <div className="popupImage__wrapper">
          <button
            type="button"
            aria-label="копка закрытия"
            className="popup__close"
            onClick={onClose}
          />
          <img src={card.link} alt={card.name} className="popupImage__image-opened" />
          <h2 className="popupImage__caption">{card.name}</h2>
        </div>
      </div>
    )
}