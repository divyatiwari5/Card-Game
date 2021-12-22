export const getRandomCardsFromDeck = (deckCards: []) => {
  return deckCards.sort(() => Math.random() - Math.random()).slice(0, 5);
};

export const filterOutRandomCardsFromDeck = (deckCards: [], randomCards: string[]) => {
  return deckCards.filter((card) => !randomCards.includes(card));
};
