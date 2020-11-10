const INITIAL_STATE = {
  navbar: null,
  profile: null,
  profileButton: null,
  searchMenu: null,
  mapMenu: null,
  isNavbarActive: false,
  isLoginModalActive: false,
  isProfileModalActive: false,
  isGuestModalActive: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN_MODAL":
      return { ...state, isLoginModalActive: !state.isLoginModalActive };
    case "CLOSE_LOGIN_MODAL":
      return { ...state, isLoginModalActive: false };
    case "PROFILE_MODAL_STATUS":
      return { ...state, isProfileModalActive: !state.isProfileModalActive };
    case "CLOSE_PROFILE_MODAL":
      return { ...state, isProfileModalActive: false };
    case "TOGGLE_NAVBAR":
      return { ...state, isNavbarActive: !state.isNavbarActive };
    case "CLOSE_NAVBAR":
      return { ...state, isNavbarActive: false };
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
