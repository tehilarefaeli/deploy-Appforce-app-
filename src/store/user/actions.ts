import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  ADD_USER_REQUEST,
  DELETE_USER_REQUEST,
  EDIT_USER_REQUEST
} from "./actionTypes";
import {
  FetchUserRequest,
  FetchUserSuccess,
  FetchUserSuccessPayload,
  FetchUserFailure,
  FetchUserFailurePayload,
  AddUserRequest,
  IUser,
  DeleteUserRequest,
  EditUserRequest
} from "./types";


export const fetchUserRequest = (): FetchUserRequest => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (
  payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserFailurePayload
): FetchUserFailure => ({
  type: FETCH_USER_FAILURE,
  payload,
});


export const addUserRequest = (userData:any): AddUserRequest => ({
    type: ADD_USER_REQUEST,
    payload:userData
  });

export const deleteSuccess = (id: any): DeleteUserRequest => ({
  type: DELETE_USER_REQUEST,
  payload: id
})

export const editUserRequest = ( id:any, userData:any):EditUserRequest  => ({
  type: EDIT_USER_REQUEST,
  id,
  payload:userData
});
   


