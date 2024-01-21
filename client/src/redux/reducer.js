import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    message: null,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase('loginRequest', (state) => {
                state.loading = true;
            })
            .addCase('loginSuccess', (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase('loginFailure', (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase('registerRequest', (state) => {
                state.loading = true;
            })
            .addCase('registerSuccess', (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase('registerFailure', (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase('loadUserRequest', (state) => {
                state.loading = true;
            })
            .addCase('loadUserSuccess', (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase('loadUserFailure', (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase('logoutRequest', (state) => {
                state.loading = true;
            })
            .addCase('logoutSuccess', (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase('logoutFailure', (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.error = action.payload;
            })
            .addCase('clearError', (state) => {
                state.error = null;
            })
            .addCase('clearMessage', (state) => {
                state.message = null;
            })
    }
);

export const messageReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase('addPickupRequest', (state) => {
                state.loading = true;
            })
            .addCase('addPickupSuccess', (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase('addPickupFailure', (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase('updatePickupRequest', (state) => {
                state.loading = true;
            })
            .addCase('updatePickupSuccess', (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase('updatePickupFailure', (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase('cancelPickupRequest', (state) => {
                state.loading = true;
            })
            .addCase('cancelPickupSuccess', (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase('cancelPickupFailure', (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase('updateProfileRequest', (state) => {
                state.loading = true;
            })
            .addCase('updateProfileSuccess', (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase('updateProfileFailure', (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase('updatePasswordRequest', (state) => {
                state.loading = true;
            })
            .addCase('updatePasswordSuccess', (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase('updatePasswordFailure', (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase('clearError', (state) => {
                state.error = null;
            })
            .addCase('clearMessage', (state) => {
                state.message = null;
            })
    }
);
