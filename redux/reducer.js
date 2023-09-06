const initialState = {
  loggedIn: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        loggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};
