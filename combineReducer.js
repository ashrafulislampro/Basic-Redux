const { createStore, combineReducers } = require("redux");

//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// card constants
const GET_CARD_ITEMS = "GET_CARD_ITEMS";
const ADD_CARD_ITEM = "ADD_CARD_ITEM";
// product state
const initailProductState = {
  products: ["sugar", "salt"],
  productsOfNum: 2,
};
// card state
const initailCardState = {
  card: ["sugar", "salt"],
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
// card action
const getCards = () => {
  return {
    type: GET_CARD_ITEMS,
  };
};
const addCard = (value) => {
  return {
    type: ADD_CARD_ITEM,
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
// CARD REDUCER
const reducerCard = (state = initailCardState, action) => {
  switch (action.type) {
    case GET_CARD_ITEMS:
      return {
        ...state,
      };
    case ADD_CARD_ITEM:
      return {
        card: [...state.card, action.payload],
        productsOfNum: state.productsOfNum + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducerProduct,
  reducerCard,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());

store.dispatch(addProduct("rice"));

store.dispatch(getCards());

store.dispatch(addCard("Mango"));
