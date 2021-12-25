import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import * as deckCards from './data/cards.json';
import { getRandomCardsFromDeck, filterOutRandomCardsFromDeck } from './modules/index';
import store from './store';

const mockStore = configureStore();
const reduxStore = mockStore();

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
  // GIVEN
  const { cards } = deckCards;
  // WHEN
  const randomCards = getRandomCardsFromDeck(cards);
  const newCards = filterOutRandomCardsFromDeck(cards, randomCards);

  reduxStore.dispatch({ type: 'DEAL_CARDS', selectedCards: randomCards, cards: newCards });

  expect(reduxStore.getActions()).toEqual([
    { type: 'DEAL_CARDS', selectedCards: randomCards, cards: newCards },
  ]);
  // THEN
  // expect(reduxStore.selectedCards).toHaveLength(5);
});
