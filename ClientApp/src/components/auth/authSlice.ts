import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface AuthState {
    userName: string;
    password: string;
    isAuthenticated: boolean;
    message: string;
}

// Define the initial state using that type
const initialState: AuthState = {
    userName: '',
    password: '',
    isAuthenticated: false,
    message: '',
}

const getUser = createAsyncThunk('auth/setUser', async()=>{
    const response = await fetch('http://localhost:4226/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });

    const content = await response.json();
    return content.name;
});
export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string, string>) => {
            fetch('http://localhost:4226/api/user', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            }).then(response =>{
                response.json().then(content => state.userName = content.name)
            })
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getUser.fulfilled, (state, action) =>{
            state.userName = action.payload
        })
    }
})

export const { setUserName } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer