import { configureStore } from "@reduxjs/toolkit"
import {puzzleServerSlice} from "./puzzleServerSlice.js";
import {puzzleApiSlice} from "./puzzleApiSlice.js";
import {authApiSlice} from "./authApiSlice.js";
import {authSlice} from "./authSlice.js";


export const store = configureStore({
    reducer: {
        [puzzleServerSlice.name]: puzzleServerSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [puzzleApiSlice.reducerPath]: puzzleApiSlice.reducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(puzzleApiSlice.middleware).concat(authApiSlice.middleware)
    )
})
