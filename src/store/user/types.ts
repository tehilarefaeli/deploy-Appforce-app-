import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER_REQUEST,
  DELETE_USER_REQUEST,
  EDIT_USER_REQUEST
} from "./actionTypes";

export interface IUser {
  id:Id;
  email: string;
  name: Name;
  picture: Picture;
  location: Location;
}

export interface Location {
  street: Street
  city: string
  country: string
}

export interface Id{
  value: any
}

export interface Street {
  number: number
  name: string
}

export interface Picture {
  medium: string
}

export interface Name{
  title: string
  first: string
  last: string
}

export interface UserState {
  pending: boolean;
  users: IUser[];
  error: string | null;
}

export interface FetchUserSuccessPayload {
  users: IUser[];
}

export interface FetchUserFailurePayload {
  error: string;
}

export interface FetchUserRequest {
  type: typeof FETCH_USER_REQUEST;
}

export type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
  type: typeof FETCH_USER_FAILURE;
  payload: FetchUserFailurePayload;
};


export interface AddUserRequest {
    type: typeof ADD_USER_REQUEST;
    payload:any
  }

  export interface DeleteUserRequest {
    type: typeof DELETE_USER_REQUEST;
    payload:any
  }

  export interface EditUserRequest {
    type: typeof EDIT_USER_REQUEST;
    id:any
    payload:any
  }

export type UserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure
  |DeleteUserRequest
  |EditUserRequest;
