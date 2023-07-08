export const getRandomCardsFromDeck = (deckCards: string[]) => {
  const shuffleCards = deckCards.sort(() => Math.random() - Math.random());
  const randomCards = shuffleCards.slice(0, 5);
  const newCards = shuffleCards.slice(5);
  return [randomCards, newCards];
};
