import rootReducer from './index';

const deckCards = require('../../data/cards.json');
const { cards } = deckCards;

describe('rootReducer', () => {
  const initialState = {
    cards: cards,
    selectedCards: [],
    winner: false,
    allAceUsed: false,
    gameEnd: false,
  };

  it('returns initial state when no action is passed', () => {
    const reducer = rootReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('returns initial state when game is reset', () => {
    const reducer = rootReducer(undefined, { type: 'RESET' });
    expect(reducer).toEqual(initialState);
  });

  it('sets winner when the game is won', () => {
    let initialStateValues = rootReducer(undefined, { type: 'SOME_RANDOM_TYPE' });
    expect(initialStateValues.winner).toBe(false);
    expect(initialStateValues.gameEnd).toBe(false);

    initialStateValues = rootReducer(undefined, { type: 'SET_WINNER', winner: true });
    expect(initialStateValues.winner).toBe(true);
    expect(initialStateValues.gameEnd).toBe(true);
  });

  it('sets winner when the game is lost', () => {
    let initialStateValues = rootReducer(undefined, { type: 'SOME_RANDOM_TYPE' });
    expect(initialStateValues.winner).toBe(false);
    expect(initialStateValues.gameEnd).toBe(false);

    initialStateValues = rootReducer(undefined, { type: 'SET_WINNER', winner: false });
    expect(initialStateValues.winner).toBe(false);
    expect(initialStateValues.gameEnd).toBe(true);
  });

  it('sets all used ace to true when all the aces are used', () => {
    let initialStateValues = rootReducer(undefined, { type: 'SOME_RANDOM_TYPE' });
    expect(initialStateValues.allAceUsed).toBe(false);

    initialStateValues = rootReducer(undefined, { type: 'SET_ALL_ACE_USED' });
    expect(initialStateValues.allAceUsed).toBe(true);
  });

  it('select cards from the deck', () => {
    let initialStateValues = rootReducer(undefined, { type: 'SOME_RANDOM_TYPE' });
    expect(initialStateValues.cards).toEqual(cards);
    expect(initialStateValues.selectedCards).toEqual([]);

    const randomCards = cards.sort(() => Math.random() - Math.random()).slice(0, 5);
    const newCards = cards.filter((card) => !randomCards.includes(card));

    initialStateValues = rootReducer(undefined, {
      type: 'DEAL_CARDS',
      cards: newCards,
      selectedCards: randomCards,
    });
    expect(initialStateValues.cards).toEqual(newCards);
    expect(initialStateValues.selectedCards).toEqual(randomCards);
  });
});
