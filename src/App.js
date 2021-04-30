import "./App.scss";
import { CARDS_LIST } from "./components/cards-list";
import { BIG_CARDS_LIST} from "./components/cards-list_5x4";
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
  const [gameType, setGameType] = useState('3x4');

  let lockBoard = false;


  useEffect(() => {
    let arr = gameType === '3x4' ? CARDS_LIST : BIG_CARDS_LIST;
    var copy = [].concat(arr);
    setNewArray(
      copy.sort(function () {
        return 0.5 - Math.random();
      })
    );
  }, [gameType]);

  useEffect(() => {
    if (gameType === '3x4' && guessedCards.flat().length === 12 || gameType === '5x4' && guessedCards.flat().length === 20) {
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
      <div className={gameType === '3x4' ? 'main-block_4x3' : 'main-block_5x4'}>
        <Results
          endDate={endDate}
          guessedCards={guessedCards}
          gamePeriod={gamePeriod}
          setGamePeriod={setGamePeriod}
          steps={steps}
          setGameType={setGameType}
        />
        <div className="card-list">
          {newArray.map((card, index) => (
            <Card key={index} card={card} index={index} guessedCards={guessedCards} flippedArr={flippedArr} flip={flip} />
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default App;
