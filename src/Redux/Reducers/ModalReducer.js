const INITIAL_STATE = {
  navbar: null,
  profile: null,
  profileButton: null,
  mapMenu: null,
  searchMenu: null,
  isLoginModalActive: false,
  isProfileModalActive: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_MODAL_STATUS":
      return { ...state, isLoginModalActive: action.payload };
    case "PROFILE_MODAL_STATUS":
      return { ...state, isProfileModalActive: !state.isProfileModalActive };
    case "CLOSE_PROFILE_MODAL":
      return { ...state, isProfileModalActive: false };
    case "REF_NAVBAR":
      return { ...state, navbar: action.payload };
    case "REF_PROFILE_MENU":
      return { ...state, profile: action.payload };
    case "REF_PROFILE_BUTTON":
      return { ...state, profileButton: action.payload };
    case "REF_MAP_MENU":
      return { ...state, mapMenu: action.payload };
    case "REF_SEARCH_MENU":
      return { ...state, searchMenu: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
