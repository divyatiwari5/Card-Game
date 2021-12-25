const initialState = {
  cards: [
    'SA',
    'SK',
    'SQ',
    'SJ',
    'S10',
    'S9',
    'S8',
    'S7',
    'S6',
    'S5',
    'S4',
    'S3',
    'S2',
    'HA',
    'HK',
    'HJ',
    'HQ',
    'H10',
    'H9',
    'H8',
    'H7',
    'H6',
    'H5',
    'H4',
    'H3',
    'H2',
    'DA',
    'DK',
    'DJ',
    'DQ',
    'D10',
    'D9',
    'D8',
    'D7',
    'D6',
    'D5',
    'D4',
    'D3',
    'D2',
    'CA',
    'CK',
    'CJ',
    'CQ',
    'C10',
    'C9',
    'C8',
    'C7',
    'C6',
    'C5',
    'C4',
    'C3',
    'C2',
  ],
  selectedCards: [],
  isWinner: false,
  allAceUsed: false,
  usedAceCounter: 0,
  isGameEnd: false,
};

interface IAction {
  type: string;
  isWinner: boolean;
  cards: string[];
  selectedCards: [];
  usedAceCounter: number;
  allAceUsed: boolean;
  isGameEnd: boolean;
}
// Spade, Heart, Diamonds, Clubs
// Ace, King, Queen, Jack, 10, 9, 8, 7, 6, 5, 4, 3, 2

// Rules:
// 1. Generate 5 random cards everytime deal button is pressed
// 2. Don't repeat cards
// 3. When all aces have been dealt - Game Over
// 4. If ace is present in the last deal - Declare Winner else Better luck next time

const rootReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'RESET':
      return { ...initialState };
    case 'SET_WINNER':
      return { ...state, isWinner: action.isWinner, isGameEnd: true };
    case 'DEAL_CARDS':
      return { ...state, cards: action.cards, selectedCards: action.selectedCards };
    case 'SET_ALL_ACE_USED':
      return { ...state, allAceUsed: true };
    case 'SET_ACE_COUNTER':
      return { ...state, usedAceCounter: action.usedAceCounter };
    default:
      return state;
  }
};

export default rootReducer;
