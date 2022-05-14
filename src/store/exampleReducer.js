/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    myValue: true,
};

const exampleReducer = createSlice({
    initialState,
    name: 'example',
    reducers: {
        toggleMyValue(state, action) {
            state.screenLocked = !state.screenLocked;
        },
    },
});

export const { toggleMyValue } = exampleReducer.actions;

export default exampleReducer.reducer;
