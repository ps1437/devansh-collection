const initialState = { isLoading: false };

export const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SPINNER":
      return {
        isLoading: action.payload
      };
    default:
      return state;
  }
};
