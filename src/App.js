import "./App.scss";
import { CARDS_LIST } from "./components/cards-list";
import { useEffect, useState } from "react";
import { Results } from "./components/results";

function App() {
  const [flippedArr, setFlippedArr] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);
  const [newArray, setnewArray] = useState([]);
  const [gamePeriod, setGamePeriod] = useState("start");
  const [endDate, setEndDate] = useState(0);
  const [steps, setSteps] = useState(0);
  let lockBoard = false;

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
      setGamePeriod("end");

      let a = Date.now();
      setEndDate(a);
    }
    return null;
  }, [guessedCards]);

  const flip = (index, name) => {
    if (lockBoard) return;
    if(gamePeriod !== 'started') return;
    setSteps(steps + 1);
    setFlippedArr((prevState) => [...prevState, { index: index, name: name }]);
  };

  const checkDifference = () => {
    let c = flippedArr.filter((obj) => obj);

    c[0].name === c[1].name ? disableCards(c) : unFlip();
  };

  const disableCards = (obj) => {
    setGuessedCards((prevState) => [...prevState, obj]);
    lockBoard = false;
    setFlippedArr([]);
  };

  const unFlip = () => {
    setTimeout(() => {
      setFlippedArr([]);
      lockBoard = false;
    }, 700);
  };

  if (flippedArr.length === 2) {
    lockBoard = true;

    checkDifference();
  }

  return (
    <div className="App">
      <div>
        <Results
          endDate={endDate}
          guessedCards={guessedCards}
          gamePeriod={gamePeriod}
          setGamePeriod={setGamePeriod}
          steps={steps}
        />
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
