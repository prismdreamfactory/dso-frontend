import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const INITIAL_STATE = {
  cart: [1, 2],
  products: {
    1: {
      id: 1,
      name: "Snoop's Choice",
      brand: 'Snoop',
      price: 125,
      type: 'indica',
      image: '/static/products/concentrate-gotexcellence.jpg'
    },
    2: {
      id: 2,
      name: "Chong's Choice",
      brand: 'Chong',
      price: 125,
      type: 'sativa',
      image: '/static/products/concentrate-goldenleaf.jpg'
    },
    3: {
      id: 3,
      name: 'Garrison Lanes Top Shelf',
      brand: 'Garrison Lane',
      price: 125,
      type: 'hybrid',
      image: '/static/products/concentrate-queenofhearts.jpg'
    },
    4: {
      id: 4,
      name: 'Jungle Boys Only',
      brand: 'Jungle Boys',
      price: 125,
      type: 'sativa',
      image: '/static/curt-ice-01.jpg'
    },
    5: {
      id: 5,
      name: "Snoop's Choice",
      brand: 'Snoop',
      price: 125,
      type: 'indica',
      image: '/static/products/concentrate-gotexcellence.jpg'
    },
    6: {
      id: 6,
      name: "Chong's Choice",
      brand: 'Chong',
      price: 125,
      type: 'sativa',
      image: '/static/products/concentrate-01.jpg'
    }
  },
  collections: {
    1: { id: '1', name: 'flower', products: [1, 2, 3, 4, 5, 6] },
    2: { id: '2', name: 'concentrates', products: [1, 2, 3, 4, 5, 6] },
    3: { id: '3', name: 'edibles', products: [1, 2, 3, 4, 5, 6] }
  },
  showCart: false,
  showProduct: false
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
        products: products
      };

    case actionTypes.VIEW_PRODUCT:
      return {
        ...state,
        showProduct: !state.showProduct
      };

    default:
      return state;
  }
};

export const toggleCart = () => ({ type: actionTypes.TOGGLE_CART });
export const addToCart = product => ({
  type: actionTypes.ADD_TO_CART,
  product
});
export const removeFromCart = product => ({
  type: actionTypes.REMOVE_FROM_CART,
  product
});

export const fetchProducts = () => ({ type: actionTypes.FETCH_PRODUCTS });
export const viewProduct = () => ({ type: actionTypes.VIEW_PRODUCT });

export function initializeStore(initialState = INITIAL_STATE) {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
