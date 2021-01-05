import { PRODUCT_LIST__FAIL, PRODUCT_LIST__REQUEST, PRODUCT_LIST__SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = {loading:true, products:[]}, action) => {
    switch(action.type){
        case PRODUCT_LIST__REQUEST:
            return {loading:true};
            break;
        case PRODUCT_LIST__SUCCESS:
            return {loading:false, products:action.payload};
        case PRODUCT_LIST__FAIL:
            return {loading:false, error:action.payload};
        default:
            return state
    }
}