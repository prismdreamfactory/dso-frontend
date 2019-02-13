import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  products: [
    {
      name: 'My first product',
      price: 50,
      description: 'I like turtles',
      image: 'url',
      id: 1
    },
    {
      name: 'My second product',
      price: 100,
      description: 'I like zonks',
      image: 'url',
      id: 2
    },
    {
      name: 'My third product',
      price: 150,
      description: 'I like dragons',
      image: 'url',
      id: 3
    }
  ],
  showCart: false,
  showProduct: false
};

export const actionTypes = {
  TOGGLE_CART: 'TOGGLE_CART',
  VIEW_PRODUCT: 'VIEW_PRODUCT'
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
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

export const viewProduct = () => ({ type: actionTypes.VIEW_PRODUCT });

export function initializeStore(initialState = initialState) {
  return createStore(reducer, composeWithDevTools());
}
