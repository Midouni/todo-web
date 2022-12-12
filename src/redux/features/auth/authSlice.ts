import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signIn, signUp } from "./service";
import { AuthState, SignInResponse, SignUpResponse } from "./types";

const initialState: AuthState = {
    currentUser: null,
    token: null,
    error: false,
    message: '',
    loading: false,
}

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        saveToken: (state, action) => {
            state.token = action.payload?.token;
            localStorage.setItem('access-token', action.payload?.token);
        },
    },
    extraReducers: (builder) => {
        // CASE 1: user register for an account.
        builder.addCase(signUp.pending, (state: AuthState) => {
            state.loading = true;
            state.error = false;
            state.message = '';
        });
        builder.addCase(signUp.fulfilled, (state: AuthState, action: PayloadAction<SignUpResponse>) => {
            state.loading = false;
            state.error = false;
            state.message = '';
            state.message = 'Your account has been created!';
            state.currentUser = action.payload?.user;
        });
        builder.addCase(signUp.rejected, (state: AuthState) => {
            state.loading = false;
            state.error = true;
            state.message = 'There was an issue creating your account!';
        });

        // CASE 2: user login using his account.
        builder.addCase(signIn.pending, (state: AuthState) => {
            state.loading = true;
            state.error = false;
            state.message = '';
        });
        builder.addCase(signIn.fulfilled, (state: AuthState, action: PayloadAction<SignInResponse>) => {
            state.loading = false;
            state.error = false;
            state.message = '';
            state.currentUser = action.payload?.user;
            state.token = action.payload?.token;
        });
        builder.addCase(signIn.rejected, (state: AuthState) => {
            state.loading = false;
            state.error = true;
            state.message = 'Invalid login/password combination!';
        });
    },
});

const { reducer } = authSlice;
export const { saveToken } = authSlice.actions;
export default reducer;