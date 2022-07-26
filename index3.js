const { createStore } = require("redux");

// CONSTANTS
const ADD_USER = "ADD_USER";
// State declare
const initialState = {
  users: ["Ashraful Islam"],
  count: 1,
};

// action create function
const addUsers = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

// create reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};
// create store
const store = createStore(counterReducer);
// call subscribe() for view
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(addUsers("Rakibul"));
