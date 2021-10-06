import { configureStore } from '@reduxjs/toolkit'
import counterReducer, {CounterState} from '../components/Counter/counterSlice';
import authReducer, { AuthState} from '../components/auth/authSlice';
import { createStore, applyMiddleware, compose, Middleware, combineReducers } from "redux";

import {
  routerMiddleware
} from "react-router-redux";




const loggerMiddleware: Middleware<{counter:CounterState, auth:AuthState}> = store => next => action => {
  console.log("Action type:", action.type);
  console.log("Action payload:", action.payload);
  console.log("State before:", store.getState());
  next(action);
  console.log("State after:", store.getState());
}

const middlewares = applyMiddleware(...[loggerMiddleware]);

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer
})
export const store = createStore(rootReducer, middlewares);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch