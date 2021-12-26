import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CardCounter from './CardCounter';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders card counter', () => {
  act(() => {
    render(<CardCounter counter={47} ace={4} />, container);
  });
  expect(container.textContent).toBe('47 Cards Left(Ace: 4 remaining)');
});
