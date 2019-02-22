import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import products from './data';

const INITIAL_STATE = {
  cart: [1, 2],
  products: {},
  collections: {
    1: {
      id: 1,
      name: 'boxes',
      description: 'DSO Grade Strains Delivered Direct to Your Door.'
    },
    2: {
      id: 2,
      name: 'flower',
      description:
        'The highest-quality bud. Grind it up, roll it, or pack into your preferred smoking device.'
    },
    3: {
      id: 3,
      name: 'concentrates',
      description:
        'Highly potent cannabis extracts — favored by advanced customers.'
    },
    4: { id: 4, name: 'edibles', description: 'DSO Grade Strains' },
    5: {
      id: 5,
      name: 'vapes',
      description: 'Discreet and easy. Use with any 510-compatible battery.'
    },
    6: { id: 6, name: 'cbd', description: '' },
    7: {
      id: 7,
      name: 'accessories',
      description: 'Tools, add-ons, and gear to help you enjoy the moment.'
    }
  },
  showCart: false,
  showProduct: false,
  currentProduct: null
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
