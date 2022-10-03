import { combineReducers } from "redux";

import todoReducer from "./user/reducer";

const rootReducer = combineReducers({
  user: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
