import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import * as deckCards from './data/cards.json';
import { getRandomCardsFromDeck } from './modules/index';
import store from './store';

const mockStore = configureStore();
let reduxStore;

const { cards } = deckCards;

const initialState = {
  cards,
  selectedCards: [],
  isWinner: false,
  allAceUsed: false,
  isGameEnd: false,
  usedAceCounter: 0,
};

beforeEach(() => {
  reduxStore = mockStore({ ...initialState });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('Deal function', () => {
  // WHEN
  const [randomCards, newCards] = getRandomCardsFromDeck(cards);

  reduxStore.dispatch({ type: 'DEAL_CARDS', selectedCards: randomCards, cards: newCards });

  // THEN
  expect(reduxStore.getActions()).toEqual([
    { type: 'DEAL_CARDS', selectedCards: randomCards, cards: newCards },
  ]);
});
