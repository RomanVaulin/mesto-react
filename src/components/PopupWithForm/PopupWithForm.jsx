export default function PopupWithForm({ name, title, titleButton, children, isOpen, onClose }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button
                type="button"
                aria-label="копка закрытия"
                className="popup__close"
                onClick={onClose}
                />
                <form
                name={name}
                className="popupEdit__form popup__form"
                noValidate=""
                >
                    <h2 className="popupEdit__description">{title}</h2>
                    {children}
                    <button
                        className="popupEdit__save-button popup__button"
                        aria-label="кнопка сохранить"
                        type="submit"
                    >
                        {titleButton || 'Сохранить'}
                    </button>
                </form>
            </div>
        </div>
    )
}