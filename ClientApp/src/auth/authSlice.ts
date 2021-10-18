import { RootState } from './../app/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useAppDispatch } from '../app/hooks';

export interface AuthState {
    isAuthenticated: boolean,
    requestSended: boolean,
    error: boolean,
    name: string
}

const initialState: AuthState = {
    isAuthenticated: false,
    requestSended: true,
    error: false,
    name: ''
}

interface GetCurrentUserResponse{
    isOk: boolean,
    userName?: string,
    error?: boolean
}

export const userOkFetch = createAsyncThunk('get/api/user', async (): Promise<GetCurrentUserResponse> => {
    const dispatch = useAppDispatch();

    dispatch(startLoadData());
    try {

        const response = await fetch('api/user');
        let body = null;
        console.log(response);
        if (response.ok && response.body) {
            body = await response.json();
        }
        return { isOk: response.ok, userName: body.userName, error: !response.ok }
    } catch (ex) {
        
        console.error(ex);
        return { isOk: false, error: true }
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInComplete: (state: AuthState) => {
            console.log(state.isAuthenticated);
            state.isAuthenticated = true
        },
        startLoadData: state => {
            state.requestSended = true
        },
        endLoadData: state => {
            state.requestSended = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userOkFetch.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.requestSended = false
                return;
            }
            state.isAuthenticated = action.payload.isOk
            state.name = action.payload.userName ?? ''
            state.requestSended = false
        });
    }
});

export const { signInComplete, startLoadData, endLoadData } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated

export default authSlice.reducer;



