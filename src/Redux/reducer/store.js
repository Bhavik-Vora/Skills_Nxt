import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import profileReducer from './profileReducer';
import courseReducer from './courseReducer';
import {subscriptionReducer} from "./subscriptionReducer.js"

const store = configureStore({
  reducer: {
    user: userReducer,
    profile:profileReducer,
    course:courseReducer,
    subscription:subscriptionReducer,
  },
});

export default store;
export const server = 'https://skilsnxt.vercel.app/api/v1/user';
export const adminserver = 'https://skilsnxt.vercel.app/api/v1/admin';
export const otherserver = 'https://skilsnxt.vercel.app/api/v1/other';
