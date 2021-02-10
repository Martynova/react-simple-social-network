import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersItems = createSelector(getUsers, (users) => {
    return users.filter(u => true);
} )