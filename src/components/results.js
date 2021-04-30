import { useState } from "react";

import "./modal.scss";

export const Results = ({ gamePeriod, endDate, setGamePeriod, steps, setGameType }) => {
  const [startDate, setStartDate] = useState(null);

  const counterStart = () => {
    setGamePeriod("started");
    let a = Date.now();
    setStartDate(a);
  };
  
  let time = Math.round((endDate - startDate) / 1000)
    .toString()
    .split("");

    let accurateTime = time[time.length - 1] === 3 || 2 || 1 || 4;

  return (
    <div>
      {gamePeriod === "start" ? (
        <div className="results-modal">
          <div>
            <p> типичная игра "найди пару". правила просты: надо просто найти пару</p>
            <button className="modal-button" onClick={counterStart}>
              стартуем
            </button>
            <div className="side-buttons">
        <button className="side-buttons__butttons" onClick={()=> setGameType('3x4')}>3x4</button>
        <button className="side-buttons__butttons" onClick={()=> setGameType('5x4')}>5x4</button>
      </div>
          </div>
        </div>
      ) : gamePeriod === "end" ? (
        <div className="results-modal">
          <div className="results-modal__body">
            <h1 className="results-modal__header">вы закончили</h1>
            <div className="results-modal__statistic">
              на это ушло
              <span> {time.join("") > 60 ? ((endDate - startDate) / 60000).toFixed(2) : time} </span>
              {time.join("") > 60 ? (
                <p>{accurateTime ? "минут" : "минуты"}</p>
              ) : (
                <p>{accurateTime ? "секунд" : "секунды"}</p>
              )}
              а еще вы сделали {steps / 2} шагов
            </div> 
            <div className="buttons"></div>
            <button className="buttons__modal-button" onClick={() => alert('ну блин')}>блин</button>
            <button className="buttons__modal-button" onClick={() => window.location.reload()}>
              перезапустить
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
