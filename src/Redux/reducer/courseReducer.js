import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  lectures: [],
  loading: false,
  error: null,
  message: null,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    // Synchronous actions
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('allCoursesRequest', (state) => {
        state.loading = true;
      })
      .addCase('allCoursesSuccess', (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase('allCoursesFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('getCourseRequest', (state) => {
        state.loading = true;
      })
      .addCase('getCourseSuccess', (state, action) => {
        state.loading = false;
        state.lectures = action.payload;
      })
      .addCase('getCourseFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('addToPlaylistRequest', (state) => {
        state.loading = true;
      })
      .addCase('addToPlaylistSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('addToPlaylistFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  .addCase('clearError', (state) => {
    state.error = null;
  })
  .addCase('clearMessage', (state) => {
    state.message = null;
  });
}});

// Export actions
// Export reducer
export default courseSlice.reducer;
