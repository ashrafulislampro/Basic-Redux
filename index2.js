// state - cont: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// difining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const RESET = "RESET";
// state
const initialState = {
  users: ["Ashraful Islam"],
  count: 0,
};
// dispatch, action -Object => type, payload
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounterAction = () => {
  return {
    type: RESET,
  };
};
const incrementByValueCounterAction = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// creating reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      state;
  }
};
// creating store

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());

// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
store.dispatch(incrementByValueCounterAction(5));
store.dispatch(incrementByValueCounterAction(10));
