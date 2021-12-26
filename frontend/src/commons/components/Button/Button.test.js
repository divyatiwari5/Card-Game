import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { YellowButton } from './Button';

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

it('renders button with Reset or PlayAgain text', () => {
  act(() => {
    render(<YellowButton btnText="Reset" />, container);
  });
  expect(container.textContent).toBe('Reset');

  act(() => {
    render(<YellowButton btnText="Play Again" />, container);
  });
  expect(container.textContent).toBe('Play Again');
});

it('align button to center or right or default position', () => {
  act(() => {
    render(<YellowButton btnText="Reset" align="right" />, container);
  });
  expect(container.firstChild.className).toBe('button right');

  act(() => {
    render(<YellowButton btnText="Reset" align="center" />, container);
  });
  expect(container.firstChild.className).toBe('button center');

  act(() => {
    render(<YellowButton btnText="Reset" />, container);
  });
  expect(container.firstChild.className).toBe('button');
});
