import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUserInfo: null,
        isFetchingUser: false,
        isError: false
    },
    reducers: {
        // LOGIN REDUCERS
        loginStart: (state) => {
            state.isFetchingUser = true;
        },
        loginSuccess: (state, action) => {
            state.currentUserInfo = action.payload;
            state.isFetchingUser = false;
        },
        loginFailure: (state) => {
            state.isError = true;
        }
    }
})

export const {loginStart, loginFailure, loginSuccess} = userSlice.actions;
export default userSlice.reducer;