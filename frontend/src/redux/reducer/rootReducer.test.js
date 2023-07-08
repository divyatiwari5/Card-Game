import * as deckCards from '../../data/cards.json';
import rootReducer from './index';

const { cards } = deckCards;

describe('rootReducer', () => {
  const initialState = {
    cards,
    selectedCards: [],
    isWinner: false,
    allAceUsed: false,
    isGameEnd: false,
    usedAceCounter: 0,
  };

  it('returns initial state when no action is passed', () => {
    const reducer = rootReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('returns initial state when game is reset', () => {
    const reducer = rootReducer(undefined, { type: 'RESET' });
    expect(reducer).toEqual(initialState);
  });

  it('sets isWinner to true when the game is won', () => {
    let initialStateValues = rootReducer(undefined, { type: 'SOME_RANDOM_TYPE' });
    expect(initialStateValues.isWinner).toBe(false);
    expect(initialStateValues.isGameEnd).toBe(false);

    initialStateValues = rootReducer(undefined, { type: 'SET_WINNER', isWinner: true });
    expect(initialStateValues.isWinner).toBe(true);
    expect(initialStateValues.isGameEnd).toBe(true);
  });

  it('sets isWinner to false when the game is lost', () => {
    let initialStateValues = rootReducer(undefined, { type: 'SOME_RANDOM_TYPE' });
    expect(initialStateValues.isWinner).toBe(false);
    expect(initialStateValues.isGameEnd).toBe(false);

    initialStateValues = rootReducer(undefined, { type: 'SET_WINNER', isWinner: false });
    expect(initialStateValues.isWinner).toBe(false);
    expect(initialStateValues.isGameEnd).toBe(true);
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

  it('sets used ace`s counter', () => {
    let initialStateValues = rootReducer(undefined, { type: 'SOME_RANDOM_TYPE' });
    expect(initialStateValues.usedAceCounter).toEqual(0);

    initialStateValues = rootReducer(undefined, { type: 'SET_ACE_COUNTER', usedAceCounter: 3 });
    expect(initialStateValues.usedAceCounter).toEqual(3);
  });
});
