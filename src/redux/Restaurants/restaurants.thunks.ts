import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../types/redux.types';
import {fetchAction} from '../fetch';
import {API} from '../../constants/apiEndpoints';
import {Restaurant} from '../../types/restaurants.types';

export const fetchRestaurants = createAsyncThunk<
  Restaurant[],
  void,
  {state: RootState}
>('restaurants/getRestaurants', async (_, {dispatch}) => {
  const {data} = await dispatch(
    fetchAction<{data: Restaurant[]}>({
      url: API.RESTAURANTS,
      method: 'GET',
    }),
  );

  return data?.data as Restaurant[];
});
