import * as deckCards from '../data/cards.json';
import { getRandomCardsFromDeck } from './index';

describe('Tests various scenarios of randomCard generation function', () => {
  it('returns 5 random cards and remove those 5 cards from the deck if deck contains more than 5 cards', () => {
    // GIVEN
    const { cards } = deckCards;
    // WHEN
    const [randomCards, newCards] = getRandomCardsFromDeck(cards);
    // THEN
    expect(randomCards).toHaveLength(5);
    expect(newCards).toHaveLength(47);
  });

  it('returns less than 5 random cards and empty deck if deck contains less than 5 cards', () => {
    // GIVEN
    const { less_cards } = deckCards;
    // WHEN
    const [randomCards, newCards] = getRandomCardsFromDeck(less_cards);
    // THEN
    expect(randomCards).toHaveLength(2);
    expect(newCards).toHaveLength(0);
  });
});
