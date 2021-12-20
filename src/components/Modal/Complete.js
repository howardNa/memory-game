import React from "react";
import "./modal.css";
import classnames from "classnames";
import gameLogo from "../../images/game_logo.jpg";

const CompleteModal = function (props) {
  const { gameCompleted, moves, onClick } = props;

  return (
    <div
      className={classnames({
        modal: gameCompleted,
        "display-none": !gameCompleted,
      })}
    >
      <img className="game-logo" src={gameLogo} alt="game-logo" />
      <header>Memory Game</header>
      <p className="sub-header">for a healthy life</p>
      <h2 className="finished-text">
        Finished in
        {moves} moves
      </h2>
      <button className="start-reset-button" onClick={onClick}>
        Play Again
      </button>
    </div>
  );
};

export default CompleteModal;
