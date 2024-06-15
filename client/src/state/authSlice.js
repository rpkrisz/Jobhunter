import { createSlice } from "@reduxjs/toolkit";
import { authApiSlice } from "./authApiSlice.js";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        login(state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
        },
        logout(state) {
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.accessToken;
        })
    },
    selectors: {
        selectUser: (state) => state.user,
        selectUserId: (state) => state.user.id,
        selectToken: (state) => state.token,
    }
})

export const { login, logout } = authSlice.actions;
export const { selectUser, selectUserId, selectToken } = authSlice.selectors;
