import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selecctCurrentUser = createSelector(
  selectUser,
  user => user.currentUser
);
