import { createReducer } from "@reduxjs/toolkit";

export const profileReducer = createReducer({}, (builder) => {
  builder
    .addCase('updateProfileRequest', (state) => {
      state.loading = true;
    })
    .addCase('updateProfileSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updateProfileFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('updateProfilePictureRequest', (state) => {
      state.loading = true;
    })
    .addCase('updateProfilePictureSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updateProfilePictureFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('changePasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('changePasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('changePasswordFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('forgetPasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('forgetPasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('forgetPasswordFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('resetPasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('resetPasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('resetPasswordFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('removeFromPlaylistRequest', (state) => {
      state.loading = true;
    })
    .addCase('removeFromPlaylistSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('removeFromPlaylistFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearError', (state) => {
      state.error = null;
    })
    .addCase('clearMessage', (state) => {
      state.message = null;
    });
});