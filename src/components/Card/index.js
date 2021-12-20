import "./style.css";
import cardBack from "../../images/card_back.jpg";
import classnames from "classnames";

const Card = (props) => {
  const { card, index, onClick, showCards, matchedCards } = props;
  const { id, type } = card;
  const showCard = showCards.find((card) => card.id === id);
  const hideCard = matchedCards.find((card) => card.id === id);
  let src = cardBack;

  if (showCard) src = card.image;

  const handleClick = (bah) => {
    onClick(id, type);
  };

  return (
    <div
      className={classnames("card", {
        hide: hideCard,
        "selected-card": showCard,
      })}
      key={index}
      onClick={handleClick}
    >
      <img className="card-img" src={src} alt="card-img" />
    </div>
  );
};

export default Card;
