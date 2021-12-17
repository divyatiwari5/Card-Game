const initialState = {
  cards: [],
  selectedCards: [],
  winner: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET':
      return { ...state };
    default:
      return { ...state };
  }
};

export default rootReducer;
