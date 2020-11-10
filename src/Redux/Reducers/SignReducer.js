const INITIAL_STATE = {
  userToken: null,
};

const signReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, userToken: action.payload };
    case "SIGN_OUT":
      return { ...state, userToken: null };
    default:
      return state;
  }
};

export default signReducer;
