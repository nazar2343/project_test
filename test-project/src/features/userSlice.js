import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        users: [],
        posts:[]
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
        } ,
        getPosts:(state,action)=>{
            state.posts = action.payload
        }
    },
});

export const { login, signOut, getUsers,getPosts} = userSlice.actions;

export  const selectUser = (state) => state.user.user;

export const userSelect = (state) => state.user.users;
export const postSelect = (state) => state.user.posts

export default userSlice.reducer;
