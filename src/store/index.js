import {createStore} from 'redux'
import reducer from './reducer/index.js'
import { addToCart }  from './actions/index.js';
const store=createStore(reducer);

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe();
export default store;