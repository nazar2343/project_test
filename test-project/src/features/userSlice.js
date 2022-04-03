import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        users: []
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        signOut: (state) => {
            state.user = null;
        },
        getUsers: (state, action) => {
            state.users = action.payload;
        } 
    },
});

export const { login, signOut, getUsers } = userSlice.actions;

export  const selectUser = (state) => state.user.user;

export const userSelect = (state) => state.user.users;

export default userSlice.reducer;
