export default function Card({ card, onOpenCard }) {
    return (
        <>
            <img src={card.link} alt={card.name} className="element__image" onClick={() => onOpenCard({link: card.link, name: card.name})} />
            <div className="element__group">
                <h2 className="element__description">{card.name}</h2>
                <div className="element__container">
                <button
                    type="button"
                    aria-label="копка нравится"
                    className="element__like-button"
                />
                <span className="element__likes_number" />
                </div>
            </div>
            <button
                className="element__trash"
                type="button"
                aria-label="кнопка удления"
            />
        </>
    )
}