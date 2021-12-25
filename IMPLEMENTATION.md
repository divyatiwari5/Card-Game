## App structure and features

### Features

- [x] There is a deck of 52 cards of 4 suits: ♣ Clubs, ♦ Diamonds, ♥ Hearts, ♠ Spades
- [x] To play game, press `Deal` button
- [x] `Deal` button will deal 5 unique random cards everytime it is clicked
- [x] `Reset` button resets the game
- [x] When all the aces have been dealt, "Game Over" is displayed
- [x] If there is an ace in the last draw and there are no more cards left to deal, `Winner` is declared, otherwise `You Lose. Better luck next time!` is displayed
- [x] Card Counter and ace counter is being displayed on the screen

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

- [x] Test cases for reducers
  - [x] When no action is passed
  - [x] When game is reset
  - [x] When game is won
  - [x] When game is lost
  - [x] When all aces are used
  - [x] Deal cards
- [x] Test cases for modules
  - [x] getRandomCardsFromDeck
  - [x] filterOutRandomCardsFromDeck
- [x] Test cases for App.tsx
  - [x] App is rendered successfully
  - [x] Deal function

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
