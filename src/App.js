import "./App.scss";
import { CARDS_LIST } from "./components/cards-list";
import { useEffect, useState } from "react";
import { Results } from "./components/results";

function App() {
  const [flippedArr, setFlippedArr] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);
  const [newArray, setnewArray] = useState([]);
  const [modal, setModal] = useState(true);
  const [gamePeriod, setGamePeriod] = useState('start');

  useEffect(() => {
    var copy = [].concat(CARDS_LIST);
    setnewArray(
      copy.sort(function () {
        return 0.5 - Math.random();
      })
    );
  }, []);

  useEffect(() => {
    if (guessedCards.flat().length === 12) {
      setModal(true);
      setGamePeriod('end');
    }
    return null;
  }, [guessedCards]);

  const flip = (index, name) => {
    setFlippedArr((prevState) => [...prevState, { index: index, name: name }]);
  };

  const checkDifference = () => {
    let c = flippedArr.filter((obj) => obj);
    c[0].name === c[1].name ? disableCards(c) : unFlip();
  };

  const disableCards = (obj) => {
    setGuessedCards((prevState) => [...prevState, obj]);

    setFlippedArr([]);
  };

  const unFlip = () => {
    setTimeout(() => {
      setFlippedArr([]);
    }, 700);
  };

  if (flippedArr.length === 2) {
    checkDifference();
  }

  function endgame() {
    setModal(true);
    setGamePeriod(false);
    return;
  }

  // console.log(guessedCards);

  return (
    <div className="App">
      <div>
        {modal && <Results guessedCards={guessedCards} setModal={setModal} modal={modal} gamePeriod={gamePeriod} />}
        <div className="card-list">
          {CARDS_LIST.map((card, index) => (
            <div
              key={index}
              className={
                flippedArr.some((a) => a.index === index) || guessedCards.flat().find((a) => a.index === index)
                  ? "card flip"
                  : "card"
              }
              onClick={(e) => flip(index, card.id)}
            >
              <div className="back-face"></div>
              <img className="front-face" alt="img" src={`http://placekitten.com/200/300?image=${card.img}`}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
