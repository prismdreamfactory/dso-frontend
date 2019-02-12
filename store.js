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
  showCart: false
};

export const actionTypes = {
  VIEW_CART: 'VIEW_CART'
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_CART:
      return {
        ...state,
        showCart: !state.showCart
      };

    default:
      return state;
  }
};

export const viewCart = () => ({ type: actionTypes.VIEW_CART });

export function initializeStore(initialState = initialState) {
  return createStore(reducer, composeWithDevTools());
}
