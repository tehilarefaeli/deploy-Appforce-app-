import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  DELETE_USER_REQUEST,
  EDIT_USER_REQUEST
} from "./actionTypes";

import { UserActions, UserState } from "./types";

const initialState: UserState = {
  pending: false,
  users: [],
  error: null,
};

const reducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: [...state.users || [], ...action.payload.users],
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error,
      };

      case DELETE_USER_REQUEST:
      const newState = state.users.filter((user) => user.id?.value !== action.payload); 
      return {
        ...state,
        pending: false,
        users:newState,
        error: null
      };
      case EDIT_USER_REQUEST:
        const updateUsers =  state.users.map(user => user.id?.value !== action.id ? user : action.payload);; 
      return {
        ...state,
        pending: false,
        users:updateUsers,
        error: null
      };
  
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
