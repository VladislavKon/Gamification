import { RootState } from './../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    isAuthenticated: boolean,
}

const initialState: AuthState = {
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInComplete: (state: AuthState) => {
            console.log(state.isAuthenticated);
            state.isAuthenticated = true
        },
    }
});

export const { signInComplete } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated

export default authSlice.reducer;