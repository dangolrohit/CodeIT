const authState = {
  isLoggedIn: false,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedin,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
