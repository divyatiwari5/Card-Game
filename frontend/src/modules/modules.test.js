const deckCards = require('./../data/cards.json');
import { filterOutRandomCardsFromDeck, getRandomCardsFromDeck } from './index';

describe('Tests modules', () => {
  it('Filter out randomaly generated card from the deck', () => {
    // GIVEN
    const card = ['SA', 'CA', '10', '9', '8'];
    const randomCards = ['SA', 'CA'];

    // WHEN
    const newDeck = filterOutRandomCardsFromDeck(card, randomCards);

    // THEN
    expect(newDeck).toEqual(['10', '9', '8']);
  });

  it('returns 5 random cards from the deck', () => {
    // GIVEN
    const { cards } = deckCards;
    // WHEN
    const randomCards = getRandomCardsFromDeck(cards);
    // THEN
    expect(randomCards).toHaveLength(5);
  });
});
