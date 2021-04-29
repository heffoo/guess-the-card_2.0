import { useState } from "react";

import "./modal.scss";

export const Results = ({  gamePeriod, endDate, setGamePeriod, steps }) => {
  const [startDate, setStartDate] = useState(null);

  const counterStart = () => {
    setGamePeriod("started");
    let a = Date.now(); 
    setStartDate(a);
  };
  let time = Math.round((endDate - startDate) / 1000)
    .toString()
    .split("");

  return (
    <div>
      {gamePeriod === "start" ? (
        <div className="results-modal">
          <div>
            <p> типичная игра "найди пару". правила просты: надо просто найти пару</p>
            <button className="modal-button" onClick={counterStart}>
              стартуем
            </button>
          </div>
        </div>
      ) : gamePeriod === "end" ? (
        <div className="results-modal">
          <div>
            <p>вы закончили</p>
            <div>
              на это ушло
              <span> {time > 60 ? ((endDate - startDate) / 60000).toFixed(2) : time} </span>
              {time > 60 ? (
                <p>{time[time.length - 1] === 3 || 2 || 1 || 4 ? "минуты" : "минут"}</p>
              ) : (
                <p>{time[time.length - 1] === 3 || 2 || 1 || 4 ? "секунды" : "секунд"}</p>
              )}
              вы сделали {steps/2} шагов
            </div>
            <button className="modal-button">блин</button>
            <button className="modal-button" onClick={() => window.location.reload()}>
              перезапустить
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
