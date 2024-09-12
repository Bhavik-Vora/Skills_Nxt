import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import profileReducer from './profileReducer';
import courseReducer from './courseReducer';
import {subscriptionReducer} from "./subscriptionReducer.js"
import authReducer from './authReducer.js';
import { adminReducer } from './adminReducer.js';
import otherReducer from './otherReducer.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile:profileReducer,
    course:courseReducer,
    subscription:subscriptionReducer,
    admin:adminReducer,
    other:otherReducer,
  },
});

export default store;
export const server = 'http://localhost:8080/api/v1/user';
export const adminserver = 'http://localhost:8080/api/v1/admin';
export const otherserver = 'http://localhost:8080/api/v1/other';
