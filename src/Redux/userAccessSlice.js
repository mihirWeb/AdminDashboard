import { createSlice } from "@reduxjs/toolkit";

const userAccessSlice = createSlice({
    name: "userAccess",
    initialState: {
        users: [],
        isProcessing: false,
        isError: false
    },
    reducers: {
        // GET ALL USERS  
        usersFetching: (state) => {
            state.isProcessing = true;
        },
        usersFetchingSuccess: (state, action) => {
            state.users = action.payload;
            state.isProcessing = false;
        },
        usersFetchingFailure: (state) => {
            state.isProcessing = false;
            state.isError = true;
        },

        // DELETE USER  
        deleteUserStart: (state) => {
            state.isProcessing = true;
        },
        deleteUserSuccess: (state, action) => {
            state.users.splice(
                state.users.findIndex((item) => item._id === action.payload),
                1
            );
            state.isProcessing = false;
        },
        deleteUserFailure: (state) => {
            state.isProcessing = false
            state.isError = true;
        },

        // UPDATE USER
        updateUserStart: (state) => {
            state.isProcessing = true;
        },
        updateUserSuccess: (state, action) => {
            state.users[state.users.findIndex((item) => item._id === action.payload._id)] = action.payload;
            state.isProcessing = false;
        },
        updateUserFailure: (state) => {
            state.isProcessing= false;
            state.isError=false;
        },

        // CREATE USER  
        createUserStart: (state) => {
            state.isProcessing = true;
        },
        createUserSuccess: (state, action) => {
            state.users.push(action.payload);
            state.isProcessing = false;
        },
        createUserFailure: (state) => {
            state.isProcessing= false;
            state.isError=false;
        }
    }
})

export const { 
    usersFetching, 
    usersFetchingSuccess, 
    usersFetchingFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    updateUserStart,
    updateUserFailure,
    updateUserSuccess,
    createUserFailure,
    createUserStart,
    createUserSuccess 
} = userAccessSlice.actions
export default userAccessSlice.reducer;