import { PRODUCT_DETAIL__REQUEST,PRODUCT_DETAIL__FAIL, PRODUCT_DETAIL__SUCCESS, PRODUCT_LIST__FAIL, PRODUCT_LIST__REQUEST, PRODUCT_LIST__SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = {loading:true, products:[]}, action) => {
    switch(action.type){
        case PRODUCT_LIST__REQUEST:
            return {loading:true};
            
        case PRODUCT_LIST__SUCCESS:
            return {loading:false, products:action.payload};
        case PRODUCT_LIST__FAIL:
            return {loading:false, error:action.payload};
        default:
            return state
    }
}

export const productDetailReducer = (
    state = { product: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAIL__REQUEST:
        return { loading: true };
      case PRODUCT_DETAIL__SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAIL__FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };