// SECTION like action
export const likeHome = (home) => {
  return {
    type: "LIKE_HOME",
    payload: home,
  };
};

export const deleteLikeHome = (home) => {
  return {
    type: "DELETE_HOME",
    payload: home,
  };
};

// SECTION Sign action

export const signin = (token) => {
  return {
    type: "SIGN_IN",
    payload: token,
  };
};

export const signout = () => {
  return {
    type: "SIGN_OUT",
  };
};

// SECTION modal action

export const toogleLoginModal = () => ({
  type: "TOGGLE_LOGIN_MODAL",
});

export const closeLoginModal = () => {
  return {
    type: "CLOSE_LOGIN_MODAL",
  };
};

export const toggleProfileModal = () => {
  return {
    type: "PROFILE_MODAL_STATUS",
  };
};

export const closeProfileModal = () => {
  return {
    type: "CLOSE_PROFILE_MODAL",
  };
};

export const toggleNavbar = () => ({
  type: "TOGGLE_NAVBAR",
});

export const closeNavbar = () => ({
  type: "CLOSE_NAVBAR",
});

// SECTION book action
export const takeBookDate = (startDate, endDate) => {
  return {
    type: "TAKE_BOOK_DATE",
    payload: { startDate: startDate, endDate: endDate },
  };
};

export const takeGuestNumber = (adults, children, babies) => ({
  type: "TAKE_GUEST_NUMBER",
  payload: { adults, children, babies },
});

export const resetGuestNumber = () => ({
  type: "RESET_GUEST_NUMBER",
});

export const takeLocation = (location) => ({
  type: "TAKE_LOCATION",
  payload: { location },
});

export const resetLoction = () => ({
  type: "RESET_LOCATION",
});

// SECTION catch object
export const refNavbar = (navbar) => {
  return {
    type: "REF_NAVBAR",
    payload: navbar,
  };
};

export const refProfile = (profile) => {
  return {
    type: "REF_PROFILE_MENU",
    payload: profile,
  };
};

export const refProfileButton = (button) => {
  return {
    type: "REF_PROFILE_BUTTON",
    payload: button,
  };
};

export const refMapMenu = (mapMenu) => ({
  type: "REF_MAP_MENU",
  payload: mapMenu,
});

export const refSearchMenu = (searchMenu) => ({
  type: "REF_SEARCH_MENU",
  payload: searchMenu,
});
