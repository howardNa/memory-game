import { createSlice } from "@reduxjs/toolkit";
import cardsArray from "../cards";
import { getShuffledCards } from "../utils";

export const game = createSlice({
  name: "game",
  initialState: {
    cards: [...cardsArray],
    shuffledCards: [],
    showCards: [],
    matchedCards: [],
    moves: 0,
  },
  reducers: {
    shuffleCards: (state) => {
      const shuffledCards = getShuffledCards(state.cards);
      state.shuffledCards = shuffledCards;
    },
    showCard: (state, action) => {
      state.showCards.push(action.payload);
    },
    checkPair: (state) => {
      const { showCards } = state;
      const card1 = showCards[0];
      const card2 = showCards[1];
      const match = card1.type === card2.type && card1.id !== card2.id;
      state.moves += 1;

      if (match) {
        state.matchedCards = state.matchedCards.concat(showCards);
        state.showCards = [];
      } else state.showCards = [];
    },
    restartGame: (state) => {
      const shuffledCards = getShuffledCards(state.cards);
      state.shuffledCards = shuffledCards;
      state.showCards = [];
      state.matchedCards = [];
      state.moves = 0;
    },
  },
});

export const { shuffleCards, showCard, checkPair, restartGame } = game.actions;
export default game.reducer;
