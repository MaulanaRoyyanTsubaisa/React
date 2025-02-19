const DEFAULT_STATE = {
  count: 0,
};

export const counterReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  } else if (action.type === "SET") {
    return { ...state, count: action.payload };
  } else {
    return state;
  }
};
