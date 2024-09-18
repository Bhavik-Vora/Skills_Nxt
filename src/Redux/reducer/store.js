import { configureStore } from '@reduxjs/toolkit';
import { adminReducer } from './adminReducer.js';
import courseReducer from './courseReducer';
import otherReducer from './otherReducer.js';
import { profileReducer } from './profileReducer';
import { subscriptionReducer } from "./subscriptionReducer.js";
import { userReducer } from './userReducer';

const store = configureStore({
  reducer: {
    admin:adminReducer,
    course:courseReducer,
    other:otherReducer,
    profile:profileReducer,
    subscription:subscriptionReducer,
    user: userReducer,

  },
});

export default store;
export const server = 'https://skilsnxt.vercel.app//api/v1/user';
export const adminserver = 'https://skilsnxt.vercel.app/api/v1/admin';
export const otherserver = 'https://skilsnxt.vercel.app/api/v1/other';
