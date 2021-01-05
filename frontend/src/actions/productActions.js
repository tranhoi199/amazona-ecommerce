import Axios from "axios";
import { PRODUCT_LIST__FAIL, PRODUCT_LIST__REQUEST, PRODUCT_LIST__SUCCESS } from "../constants/productConstants"

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