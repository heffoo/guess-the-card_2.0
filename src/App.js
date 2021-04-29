import "./App.scss";
import { CARDS_LIST } from "./components/cards-list";
import { useEffect, useState } from "react";
import { Results } from "./components/results";
import { Card } from "./components/card/card";

function App() {
  const [flippedArr, setFlippedArr] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [gamePeriod, setGamePeriod] = useState("start");
  const [endDate, setEndDate] = useState(0);
  const [steps, setSteps] = useState(0);

  let lockBoard = false;

  useEffect(() => {
    var copy = [].concat(CARDS_LIST);
    setNewArray(
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
    if (gamePeriod !== "started") return;
    setSteps(steps + 1);
    setFlippedArr((prevState) => [...prevState, { index: index, name: name }]);
  };

  const checkDifference = () => {
    let oneFlipped = flippedArr.filter((obj) => obj);

    oneFlipped[0].name === oneFlipped[1].name ? disableCards(oneFlipped) : unFlip();
  };

  const disableCards = (oneFlipped) => {
    setGuessedCards((prevState) => [...prevState, oneFlipped]);
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
      <div className="main-block">
        <Results
          endDate={endDate}
          guessedCards={guessedCards}
          gamePeriod={gamePeriod}
          setGamePeriod={setGamePeriod}
          steps={steps}
        />
        <div className="card-list">
          {newArray.map((card, index) => (
            <Card card={card} index={index} guessedCards={guessedCards} flippedArr={flippedArr} flip={flip} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
