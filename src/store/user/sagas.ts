import axios, { AxiosResponse } from "axios";
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";

import { fetchUserFailure, fetchUserSuccess } from "./actions";
import { FETCH_USER_REQUEST ,ADD_USER_REQUEST } from "./actionTypes";
import { FetchUserFailure, FetchUserSuccess, IUser} from "./types";

const getUsers = () =>
  axios.get<IUser[]>("https://randomuser.me/api/?results=10");

function* fetchUserSaga(): Generator<
  | CallEffect<AxiosResponse<IUser[]>>
  | PutEffect<FetchUserSuccess>
  | PutEffect<FetchUserFailure>,
  void,
  any
> {
  try {
    const response = yield call(getUsers);
    yield put(
      fetchUserSuccess({
        users: response.data.results,
      })
      
    );
  } catch (e:any) {
    yield put(
      fetchUserFailure({
        error: e.message,
      })
    );
  }
}

function* addUserSaga( data :any):Generator<
| CallEffect<AxiosResponse<any>>
| PutEffect<FetchUserSuccess>
| PutEffect<FetchUserFailure>,
void,
any
>{  
  const userdata=data.payload;
  const structureData =[{
    name:{
      title:userdata.title,
      first:userdata.first,
      last:userdata.last
    },
    email:userdata.email,
    picture:{
      medium:'https://randomuser.me/api/portraits/med/women/31.jpg'
    },
    location: {
      city: userdata.city,
      country:userdata.country,
      street:{
        name:userdata.name,
        number:userdata.number
      }
    },
    id:{
      value: userdata.phone

    }
  }]
  
  try{
  yield put(
    fetchUserSuccess({
      users:structureData,
    })
    
  );
}
 catch (e:any) {
  yield put(
    fetchUserFailure({
      error: e.message,
    })
  );
}
}



function* userSaga() {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
  yield all([takeLatest(ADD_USER_REQUEST, addUserSaga)]);
}

export default userSaga;
