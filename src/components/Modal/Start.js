import classnames from "classnames";
import gameLogo from "../../images/game_logo.jpg";
import "./modal.css";

const StartModal = (props) => {
  const { gameStarted, onClick } = props;

  return (
    <div
      className={classnames({
        modal: !gameStarted,
        "display-none": gameStarted,
      })}
    >
      <img className="game-logo" src={gameLogo} alt="game-logo" />
      <header>Memory Game</header>
      <p className="sub-header">for a healthy life</p>
      <button className="start-reset-button" onClick={onClick}>
        Start
      </button>
    </div>
  );
};

export default StartModal;
