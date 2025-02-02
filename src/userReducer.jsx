export const userReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.payload };
      case "UPDATE_AGE":
        return { ...state, age: action.payload };
      case "UPDATE_EMAIL":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };