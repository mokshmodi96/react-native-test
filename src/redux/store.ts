import {configureStore} from '@reduxjs/toolkit';
import RestaurantReducer from '../redux/Restaurants/restaurant.slice';
export default configureStore({
  reducer: {
    restaurants: RestaurantReducer,
  },
});
