import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { AuthenticationResultStatus, AuthorizeService } from '../api-authorization/AuthorizeService'

// Define a type for the slice state
export interface AuthState {
    userName: string;
    isAuthenticated: boolean;
    message: string;
}

// Define the initial state using that type
const initialState: AuthState = {
    userName: '',
    isAuthenticated: false,
    message: '',
}

const authService = new AuthorizeService();

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const states = action.payload;
            authService.signIn(states).then(result => {
                switch (result.status) {
                    case AuthenticationResultStatus.Redirect:
                        break;
                    case AuthenticationResultStatus.Success:
                        state.isAuthenticated = true;
                        break;
                    case AuthenticationResultStatus.Fail:
                        state.message = result.message;
                        break;
                    default:
                        throw new Error(`Invalid status result ${result.status}.`);
                }
            })
        }
    }
})

export const { login } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer