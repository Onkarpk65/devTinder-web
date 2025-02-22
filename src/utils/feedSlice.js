import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        removeUserFromFeed: (state, action) => {
            //Here the !== operator checks if eachUser._id is not equal to action.payload.
            // if they are not equal, the user remains in the new array.
            // if they are equal , the user is removed
            // user1 !== user2 keeps it 
            // user2 === user2 removes it 
            // user3 !== user2 keeps it
           const newFeed = state.filter((eachUser) => eachUser._id !== action.payload);
            return newFeed;
            //The condition removes only the user whose _id matches action.payload.
            //It ensures a new array is returned
            //Other users remain unaffected
        }
    },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;

export default feedSlice.reducer;