import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import products from './data';

const INITIAL_STATE = {
  cart: [1, 2],
  products: {},
  collections: {
    1: { id: '1', name: 'flower', products: [1, 2, 3, 4, 5, 6] },
    2: { id: '2', name: 'concentrates', products: [1, 2, 3, 4, 5, 6] },
    3: { id: '3', name: 'edibles', products: [1, 2, 3, 4, 5, 6] }
  },
  showCart: false,
  showProduct: false,
  currentProduct: ''
};

export const actionTypes = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  VIEW_PRODUCT: 'VIEW_PRODUCT'
};

// REDUCERS
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      };

    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product]
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(id => id !== action.product)]
      };

    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.products
      };

    case actionTypes.VIEW_PRODUCT:
      return {
        ...state,
        showProduct: !state.showProduct,
        currentProduct: action.currentProduct
      };

    default:
      return state;
  }
};

// Cart
export const toggleCart = () => ({ type: actionTypes.TOGGLE_CART });

export const addToCart = product => ({
  type: actionTypes.ADD_TO_CART,
  product
});

export const removeFromCart = product => ({
  type: actionTypes.REMOVE_FROM_CART,
  product
});

// Product
export const fetchProducts = () => dispatch =>
  dispatch({ type: actionTypes.FETCH_PRODUCTS, products });

export const viewProduct = currentProduct => ({
  type: actionTypes.VIEW_PRODUCT,
  currentProduct
});

export function initializeStore(initialState = INITIAL_STATE) {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
