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

export const toggleLoginModal = (loginModalStatus) => {
  return {
    type: "LOGIN_MODAL_STATUS",
    paylaod: loginModalStatus,
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

// SECTION book action
export const takeBookDate = (startDate, endDate) => {
  return {
    type: "TAKE_BOOK_DATE",
    payload: { startDate: startDate, endDate: endDate },
  };
};

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
