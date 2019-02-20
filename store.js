import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      name: "Snoop's Choice",
      brand: 'Snoop',
      price: 125,
      type: 'indica',
      image: '/static/products/concentrate-gotexcellence.jpg'
    },
    {
      id: 2,
      name: "Chong's Choice",
      brand: 'Chong',
      price: 125,
      type: 'sativa',
      image: '/static/products/concentrate-goldenleaf.jpg'
    },
    {
      id: 3,
      name: 'Garrison Lanes Top Shelf',
      brand: 'Garrison Lane',
      price: 125,
      type: 'hybrid',
      image: '/static/products/concentrate-queenofhearts.jpg'
    },
    {
      id: 4,
      name: 'Jungle Boys Only',
      brand: 'Jungle Boys',
      price: 125,
      type: 'sativa',
      image: '/static/curt-ice-01.jpg'
    },
    {
      id: 5,
      name: "Snoop's Choice",
      brand: 'Snoop',
      price: 125,
      type: 'indica',
      image: '/static/products/concentrate-gotexcellence.jpg'
    },
    {
      id: 6,
      name: "Chong's Choice",
      brand: 'Chong',
      price: 125,
      type: 'sativa',
      image: '/static/products/concentrate-01.jpg'
    }
  ],
  collections: {
    '1': { id: '1', name: 'flower', products: [1, 2, 3, 4, 5, 6] },
    '2': { id: '2', name: 'concentrates', products: [1, 2, 3, 4, 5, 6] },
    '3': { id: '3', name: 'edibles', products: [1, 2, 3, 4, 5, 6] }
  },
  showCart: false,
  showProduct: false
};

export const actionTypes = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_TO_CART: 'ADD_TO_CART',
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

    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product]
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
export const refreshCart = product => ({
  type: actionTypes.REFRESH_CART,
  product
});

export const viewProduct = () => ({ type: actionTypes.VIEW_PRODUCT });

export function initializeStore(initialState = initialState) {
  return createStore(reducer, composeWithDevTools());
}
