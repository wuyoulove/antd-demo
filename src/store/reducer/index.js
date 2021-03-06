import  { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, CHANGE_THEME }  from '../actions/index.js';

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ],
  themeColor:'blue'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }
    case CHANGE_THEME: {
      return {
        ...state,
        themeColor: action.payload.themeColor
      }
    }
    default:
      return state;
  }
}