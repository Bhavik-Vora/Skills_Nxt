import {otherserver, server} from '../reducer/store.js';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(`${server}/login`, { email, password }, { withCredentials: true });

    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const register = formdata => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: 'loadUserRequest' });

    const { data } = await axios.get(`${server}/me`,{
      withCredentials: true,
    }); 
    dispatch({
      type: 'loadUserSuccess',
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: 'loadUserFail',
      payload: error.response.data.message,
    });
  }
};


export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

// Action to buy a subscription
export const buySubscription = () => async (dispatch) => {
  try {
    dispatch({ type: 'buySubscriptionRequest' });

    const { data } = await axios.post(`${otherserver}/subscribe`,{},{
      withCredentials: true,
    }); 

    dispatch({
      type: 'buySubscriptionSuccess',
      payload: data.subscriptionId,
    });
  } catch (error) {
    dispatch({
      type: 'buySubscriptionFail',
      payload: error.response?.data.message || 'Subscription failed',
    });
  }
};

// Action to remove a subscription
export const removeSubscription = () => async (dispatch) => {
  try {
    dispatch({ type: 'cancelSubscriptionRequest' });

    const { data } = await axios.post(`${otherserver}/unsubscribe`,{},{
      withCredentials: true,
    });

    dispatch({
      type: 'cancelSubscriptionSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionFail',
      payload: error.response?.data.message || 'Cancel subscription failed',
    });
  }
};

// Action to clear any errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: 'clearError' });
};

// Action to clear messages
export const clearMessages = () => (dispatch) => {
  dispatch({ type: 'clearMessage' });
};

