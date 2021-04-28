import "./modal.scss";

export const Results = ({ setModal, modal, gamePeriod }) => {
  const counterStart = () => {
    setModal(!modal);
  };

  return (
    <div className="results-modal">
      {gamePeriod === "start" ? (
        <div>
          <p> типичная игра "найди пару". правила просты: надо просто найти пару</p>
          <button className="modal-button" onClick={counterStart}>
            стартуем
          </button>
        </div>
      ) : (
        <div>
          <p>вы закончили</p>
          <button className="modal-button" onClick={counterStart}>
            блин
          </button>
          <button className="modal-button">перезапустить</button>
        </div>
      )}
    </div>
  );
};
