interface Action {
  type: string;
  payload: any;
}

interface UserState {
  name: string;
  age: number;
  email: string;
}

export const userReducer = (state: UserState, action: Action): UserState => {
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
