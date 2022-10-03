import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: any) => state.user.pending;

const getUsers = (state: any) => state.user.users;

const getError = (state: any) => state.user.error;

export const getUsersSelector = createSelector(getUsers, (users) => users);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
