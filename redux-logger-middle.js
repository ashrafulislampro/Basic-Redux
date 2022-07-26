const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// product state
const initailProductState = {
  products: ["sugar", "salt"],
  productsOfNum: 2,
};

// product action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (value) => {
  return {
    type: ADD_PRODUCT,
    payload: value,
  };
};

const reducerProduct = (state = initailProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        productsOfNum: state.productsOfNum + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducerProduct, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());

store.dispatch(addProduct("rice"));
