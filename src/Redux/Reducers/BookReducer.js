const INITIAL_STATE = {
  location: null,
  startDate: null,
  endDate: null,
  adults: 0,
  children: 0,
  babies: 0,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TAKE_BOOK_DATE":
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    case "TAKE_GUEST_NUMBER":
      return {
        ...state,
        adults: action.payload.adults,
        children: action.payload.children,
        babies: action.payload.babies,
      };
    case "RESET_GUEST_NUMBER":
      return {
        ...state,
        adults: 0,
        children: 0,
        babies: 0,
      };
    case "TAKE_LOCATION":
      return {
        ...state,
        location: action.payload.location,
      };
    case "RESET_LOCATION":
      return {
        ...state,
        location: null,
      };
    default:
      return state;
  }
};

export default bookReducer;
