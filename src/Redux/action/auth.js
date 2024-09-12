import axios from 'axios';

// Action to check if user is authenticated
export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/auth/check'); // Adjust the endpoint as necessary
    dispatch({
      type: AUTH_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Optional: Action to log out
export const logout = () => async (dispatch) => {
  try {
    await axios.get('/api/auth/logout'); // Adjust the endpoint as necessary
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
