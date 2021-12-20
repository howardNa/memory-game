import './App.css';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import {
  shuffleCards,
  showCard,
  checkPair,
  restartGame,
} from './redux/gameSlice';
import Card from './components/Card/index';
import StartModal from './components/Modal/Start';
import CompleteModal from './components/Modal/Complete';

const App = function () {
  const dispatch = useDispatch();
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const shuffledCards = useSelector((state) => state.game.shuffledCards);
  const showCards = useSelector((state) => state.game.showCards);
  const matchedCards = useSelector((state) => state.game.matchedCards);
  const moves = useSelector((state) => state.game.moves);

  useEffect(() => {
    dispatch(shuffleCards());
  }, []);

  useEffect(() => {
    const pairSelected = showCards.length === 2;

    if (pairSelected) {
      setTimeout(() => dispatch(checkPair()), 1500);
    }
  }, [showCards]);

  useEffect(() => {
    if (matchedCards.length && matchedCards.length === shuffledCards.length) {
      setGameCompleted(true);
    }
  }, [matchedCards]);

  const onCardClickHandler = (id, type) => {
    if (showCards.length < 2) {
      dispatch(showCard({ id, type }));
    }
  };

  const onGameStart = () => {
    setGameStarted(true);
  };

  const onPlayAgain = () => {
    setGameCompleted(false);
    dispatch(restartGame());
  };

  const cardsForDisplay = shuffledCards.map((card, index) => (
    <Card
      key={index}
      index={index}
      card={card}
      onClick={onCardClickHandler}
      showCards={showCards}
      matchedCards={matchedCards}
    />
  ));

  return (
    <Container className="game-container">
      <StartModal onClick={onGameStart} gameStarted={gameStarted} />
      <Row
        className={classnames('cards-row', {
          blur: !gameStarted,
          'no-blur': gameStarted,
        })}
      >
        {cardsForDisplay}
      </Row>
      <CompleteModal
        onClick={onPlayAgain}
        gameCompleted={gameCompleted}
        moves={moves}
      />
    </Container>
  );
};

export default App;
