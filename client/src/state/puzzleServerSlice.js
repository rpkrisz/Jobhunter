import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const puzzleServerSlice = createSlice({
    name: "puzzleServer",
    initialState: {
        data: [],
        isSuccess: false,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(loadPuzzlesApi.pending, (state) => {
            state.isLoading = true;
        }).addCase(loadPuzzlesApi.rejected, (state) => {
            state.isError = true;
        }).addCase(loadPuzzlesApi.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isSuccess = true;
        })
    }
})


export const loadPuzzlesApi = createAsyncThunk("puzzles/all", async () => {
    const response = await fetch("http://localhost:3030/puzzles");

    const data = await response.json();

    return data.data;
})
