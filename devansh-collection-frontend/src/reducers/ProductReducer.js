import * as ActionType from '../constant/ActionType';

const initialState = {data:""};


export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.GET_PRODUCT:
        return {...state, 
                   data:action.data};
  
      default:
        return state;
    }
  }
  