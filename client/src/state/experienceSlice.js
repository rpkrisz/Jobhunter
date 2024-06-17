import { createSlice } from "@reduxjs/toolkit";
import { experienceApiSlice } from "./experienceApiSlice.js";
import { applicantApiSlice } from "./applicantApiSlice.js";

export const experienceSlice = createSlice({
    name: "experience",
    initialState: {
        experiences: [],
    },
    reducers: {
        addExperience: (state) => {
            state.experiences = [...state.experiences, { rownum: state.experiences.length, company: "", title: "", interval: "" }]
        },
        updateExperience: (state, { payload }) => {
            state.experiences[payload.rownum] = payload;
        },
        removeExperience: (state, { payload }) => {
            console.log(payload);
            state.experiences = state.experiences.filter((exp) => payload.rownum !== exp.rownum);
        },
        removeAll: (state) => {
            state.experiences = [];
        },

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(experienceApiSlice.endpoints.getExperiences.matchFulfilled, (state, { payload }) => {
                state.experiences = [];
                let index = 0;
                for (const experience of payload) {
                    state.experiences.push({ rownum: index++, ...experience })
                }
            })
            .addMatcher(applicantApiSlice.endpoints.getUserJobs.matchFulfilled, (state, { payload }) => {
                state.applications = payload;
            })
    },
    selectors: {
        selectExperiences: (state) => state.experiences,
    },
})

export const { removeAll, addExperience, updateExperience, removeExperience } = experienceSlice.actions;

export const { selectExperiences } = experienceSlice.selectors;
