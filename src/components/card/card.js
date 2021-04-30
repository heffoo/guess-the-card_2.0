import "./card.scss";

export const Card = ({ card, index, flippedArr, guessedCards, flip, cardsType }) => {
  return (
    <div
      key={index}
      className={
        flippedArr.some((a) => a.index === index) || guessedCards.flat().find((a) => a.index === index)
          ? "card flip"
          : "card"
      }
      onClick={() => flip(index, card.id)}
    >
      <div className="back-face"></div>
      {cardsType === "cats" ? (
        <img className="front-face" alt="img" src={`http://placekitten.com/200/300?image=${card.img}`} />
      ) : (
        <div className={`front-face ${card.color}`}></div>
      )}
    </div>
  );
};
