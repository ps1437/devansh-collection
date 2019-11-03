import * as ActionType from '../constant/ActionType';

const initialState = {};


export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.GET_PRODUCT:
        return [...state, ...action.payload];
  
      default:
        return state;
    }
  }
  