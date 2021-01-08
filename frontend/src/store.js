
import  { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailReducer, productListReducer } from "./reducers/productReducers";
const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')
         ? JSON.parse(localStorage.getItem('cartItems')) : 
         [],
    },
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    productList: productListReducer,
    productDetail:productDetailReducer,
    cart: cartReducer
})

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;