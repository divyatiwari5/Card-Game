import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Card } from './Card';

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

it('renders card with deck card value', () => {
  act(() => {
    render(<Card value="S10" />, container);
  });
  expect(container.textContent).toBe('10');
});

it('enables red class for Heart and Diamond', () => {
  act(() => {
    render(<Card value="H10" />, container);
  });
  expect(container.firstChild.firstChild.firstChild.className).toBe('number red');
});

it('does not enable red class for Spade and Clover', () => {
  act(() => {
    render(<Card value="S10" />, container);
  });
  expect(container.firstChild.firstChild.firstChild.className).toBe('number');
});
