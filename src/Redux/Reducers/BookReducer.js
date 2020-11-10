const INITIAL_STATE = {
  startDate: null,
  endDate: null,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TAKE_BOOK_DATE":
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    default:
      return state;
  }
};

export default bookReducer;
