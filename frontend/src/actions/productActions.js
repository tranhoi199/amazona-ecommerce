import Axios from "axios";
import { PRODUCT_LIST__FAIL, PRODUCT_LIST__REQUEST, PRODUCT_LIST__SUCCESS, PRODUCT_DETAIL__REQUEST, PRODUCT_DETAIL__SUCCESS, PRODUCT_DETAIL__FAIL } from "../constants/productConstants"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type:PRODUCT_LIST__REQUEST
    });
    try {
        const {data} = await Axios.get('/api/products');
        dispatch({type:PRODUCT_LIST__SUCCESS, payload:data});
    } catch (error) {
        dispatch({type:PRODUCT_LIST__FAIL, payload:error.message});
    }
}

export const detailProduct = (productId) => async (dispatch) => {
    dispatch({type:PRODUCT_DETAIL__REQUEST, payload:productId});
    try {
        const {data} = await Axios.get(`/api/products/${productId}`);
        dispatch({type: PRODUCT_DETAIL__SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_DETAIL__FAIL, payload:error.response && error.response.data.message
        ? error.response.data.message
        :error.message
    });
    }
}