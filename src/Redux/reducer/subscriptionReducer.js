import { createReducer } from '@reduxjs/toolkit';

export const subscriptionReducer = createReducer(
  { loading: false, subscriptionId: null, error: null, message: null },
  builder => {
    builder
      // Buy Subscription Cases
      .addCase('buySubscriptionRequest', state => {
        state.loading = true;
      })
      .addCase('buySubscriptionSuccess', (state, action) => {
        state.loading = false;
        state.subscriptionId = action.payload;
        state.message = 'Subscription activated';
      })
      .addCase('buySubscriptionFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Cancel Subscription Cases
      .addCase('cancelSubscriptionRequest', state => {
        state.loading = true;
      })
      .addCase('cancelSubscriptionSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('cancelSubscriptionFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Clear Error and Message
      .addCase('clearError', state => {
        state.error = null;
      })
      .addCase('clearMessage', state => {
        state.message = null;
      });
  }
);
