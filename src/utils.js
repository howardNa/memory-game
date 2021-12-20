import Card from './components/Card';

export const getRandomNumber = (num) => Math.floor(Math.random() * num);

export const getShuffledCards = (cards) => {
  const numberOfCards = cards.length;

  for (let i = numberOfCards; i > 0; i--) {
    const randomNumber = getRandomNumber(i);
    const index = i - 1;
    const swapIndex = randomNumber;

    const holdCard = cards[index];
    cards[index] = cards[swapIndex];
    cards[swapIndex] = holdCard;
  }

  return cards;
};

export const createCardsForDisplay = (cards, onCardClickHandler) => {
  const cardsForDisplay = cards.map((card, index) => (
    <Card
      key={index}
      index={index}
      card={card}
      onClick={onCardClickHandler}
    />
  ));

  return cardsForDisplay;
};
