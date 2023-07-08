## App structure and features

### Features

- [x] There is a deck of 52 cards of 4 suits: ♣ Clubs, ♦ Diamonds, ♥ Hearts, ♠ Spades
- [x] To play game, press `Deal` button
- [x] `Deal` button will deal 5 unique random cards everytime it is clicked
- [x] `Reset` button resets the game
- [x] When all the aces have been dealt, "Game Over" is displayed
- [x] If there is an ace in the last draw and there are no more cards left to deal, `Winner` is declared, otherwise `You Lose. Better luck next time!` is displayed
- [x] Card Counter is being displayed on the screen
- [x] Ace counter is being displayed on the screen
- [x] Animations 👯👯

### App structure

`frontend/`

- `src`: Contains all pages as modules. Each module contains `components` which contains component specific to that module. Any component that's to be used by multiple modules is written inside `common/components`. To reduce the complexity of import, all exportable of each module is exported in `module/index.ts`
  - `commons`: contains common components
    - `index.js`: export all the common components at root level
    - `components`: contains common components
      - `Button`: contains button component
      - `Card`: contains deck card component
  - `CardCounter`: Card counter component
  - `DealButton`: Deal Button component
  - `modules`: defined common modules
  - `redux`: defined reducer and it's test cases
  - `store.ts`: create redux store
  - `styles`:
    - `_variables.scss`: Variables used in the scss files
    - `index.scss`: Import all the scss files. Defined scss for root level component
    - `tailwind.css`: Tailwind css
  - `data`: mock data
- `package.json`: contains list of packages used in the application

## Tests with `Jest`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Existing test scenarios

- [x] [Test cases for reducers](https://github.com/uplift-interview/uplift-interview-divya-tiwari/blob/b50d04daef659d3245b2b6797d1e7ded3913bcd1/frontend/src/redux/reducer/rootReducer.test.js)
  - [x] When no action is passed
  - [x] When game is reset
  - [x] When game is won
  - [x] When game is lost
  - [x] When all aces are used
  - [x] Deal cards
  - [x] Set used ace's counter
- [x] [Test cases for modules](https://github.com/uplift-interview/uplift-interview-divya-tiwari/blob/b50d04daef659d3245b2b6797d1e7ded3913bcd1/frontend/src/modules/modules.test.js)
  - [x] getRandomCardsFromDeck
    - [x] Return and remove 5 randomly generated cards from the deck if deck size is greater than 5
    - [x] Return less than 5 cards if deck size is less than 5 and returns empty new deck
- [x] [Test cases for App.tsx](https://github.com/uplift-interview/uplift-interview-divya-tiwari/blob/b50d04daef659d3245b2b6797d1e7ded3913bcd1/frontend/src/App.test.js)
  - [x] App is rendered successfully
  - [x] Deal function
- [x] [Yellow Button component](https://github.com/uplift-interview/uplift-interview-divya-tiwari/blob/b50d04daef659d3245b2b6797d1e7ded3913bcd1/frontend/src/commons/components/Button/Button.test.js)
  - [x] renders button with Reset or PlayAgain text
  - [x] align button to center or right or default position
- [x] [Card Component](https://github.com/uplift-interview/uplift-interview-divya-tiwari/blob/b50d04daef659d3245b2b6797d1e7ded3913bcd1/frontend/src/commons/components/Card/Card.test.js)
  - [x] renders card with deck card value
  - [x] renders red class for Heart and Diamond
  - [x] does not render red class for Spade and Clover
- [x] [Card Counter Component](https://github.com/uplift-interview/uplift-interview-divya-tiwari/blob/b50d04daef659d3245b2b6797d1e7ded3913bcd1/frontend/src/CardCounter/CardCounter.test.js)
  - [x] renders card counter

### Run test cases

Go to frontend directory

`yarn run jest`

## Running react app

In the project directory, you can run

### `yarn install` or `npm install`

It will install all the required packages

### `yarn start` or `npm start`

Runs the app in development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Getting Started with the App`

On the main page, user can view the 5 random cards from the deck, deal button, reset button and cards counter.
