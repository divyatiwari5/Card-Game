export const getRandomCardsFromDeck = (deckCards: string[]) => {
  return deckCards.sort(() => Math.random() - Math.random()).slice(0, 5);
};

export const filterOutRandomCardsFromDeck = (deckCards: string[], randomCards: string[]) => {
  return deckCards.filter((card) => !randomCards.includes(card));
};
