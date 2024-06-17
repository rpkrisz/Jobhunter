import { createSlice } from "@reduxjs/toolkit";

export const titleSlice = createSlice({
    name: "title",
    initialState: {
        title: "",
    },
    reducers: {
        setTitle: (state, { payload }) => {
            state.title = payload
        },
    },
    selectors: {
        selectTitle: (state) => state.title,
    },
})

export const { setTitle } = titleSlice.actions;

export const { selectTitle } = titleSlice.selectors;
