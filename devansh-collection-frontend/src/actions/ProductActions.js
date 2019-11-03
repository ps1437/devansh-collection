
import axios from "../utils/axios";
import * as ActionType from '../constant/ActionType';
import * as API from '../constant/Api';

export const getProducts=() =>{

    return async dispatch => {
        const spin = await dispatch({
          type: ActionType.SET_SPINNER,
          payload: true
        });
    
        if (spin) {
          return axios
            .get(API.GET_PRODUCT)
            .then(response => {
              console.log("Api response");
              console.log(response);
              if (response.status === 200) {
                dispatch({ type: ActionType.GET_PRODUCT, payload: response.data });
              } else {
                dispatch({ type: ActionType.GET_PRODUCT, payload: [] });
              }
              dispatch({ type: ActionType.SET_SPINNER, payload: false });
            })
    
            .catch(error => {
              dispatch({ type: ActionType.SET_SPINNER, payload: false });
              dispatch({ type: ActionType.ERROR, payload: [] });
            });
        }
        return null;
      };
    
}
