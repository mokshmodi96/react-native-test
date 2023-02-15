import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../types/redux.types';

const selectRestaurantsState = (state: RootState) => state.restaurants;

export const selectRestaurants = createSelector(
  [selectRestaurantsState],
  restaurants => restaurants.restaurants,
);
export const selectRestaurantsLoading = createSelector(
  [selectRestaurantsState],
  restaurants => restaurants.loading,
);
