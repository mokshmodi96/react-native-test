import {createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {Restaurant, RestaurantState} from '../../types/restaurants.types';
import {fetchRestaurants} from './restaurants.thunks';

const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
};
export const counterSlice = createSlice({
  name: 'restaurant',
  initialState: initialState,
  reducers: {
    setRestaurants: (
      state: RestaurantState,
      {payload}: PayloadAction<Restaurant[]>,
    ) => {
      state.restaurants = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRestaurants.pending, state => {
        state.loading = true;
      })
      .addMatcher(
        isAnyOf(fetchRestaurants.fulfilled, fetchRestaurants.rejected),
        state => {
          state.loading = false;
        },
      );
  },
});

export const {setRestaurants} = counterSlice.actions;

export default counterSlice.reducer;
