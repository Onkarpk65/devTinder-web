import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'requests',
    initialState: null,
    reducers: {
        addRequests: (state, action) => {
            return action.payload;
        },
        removeRequest: (state, action) => {
            const newArray = state.filter((eachRequest) => eachRequest._id !== action.payload);
            return newArray;
            //Here we will pass the individual request id of the reviewed request
        }
    }
})

export const { addRequests, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;