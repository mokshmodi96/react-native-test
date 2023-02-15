import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import RestaurantCard from '../../components/RestaurantCard';
import {HomeScreenProps} from '../../types/navigation.types';
import SignOut from '../../components/svg/SignOut';
import {CommonActions} from '@react-navigation/native';
import {deleteSecureValue} from '../../helpers/secureStorage';
import {secureStoreKeys} from '../../constants/secureStoreKeys';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {fetchRestaurants} from '../../redux/Restaurants/restaurants.thunks';
import {setRestaurants} from '../../redux/Restaurants/restaurant.slice';
import {
  selectRestaurants,
  selectRestaurantsLoading,
} from '../../redux/Restaurants/restaurants.selector';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectRestaurantsLoading);
  const restaurants = useAppSelector(selectRestaurants);
  const onSignOut = async () => {
    await deleteSecureValue(secureStoreKeys.isLoggedIn);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Auth',
          },
        ],
      }),
    );
  };
  const rightAction = () => {
    return (
      <TouchableOpacity onPress={() => onSignOut()}>
        <SignOut fill={'#FFF'} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    let init = async () => {
      const result = await dispatch(fetchRestaurants());
      if (fetchRestaurants.fulfilled.match(result)) {
        dispatch(setRestaurants(result.payload));
      }
    };
    init().then();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Header title={'Restaurant List'} rightAction={rightAction()} />
      {loading ? (
        <ActivityIndicator
          color={'black'}
          style={styles.activityIndicatorStyle}
          size={'large'}
        />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({item}) => (
            <RestaurantCard
              title={item?.title}
              onPress={() => navigation.navigate('Map')}
            />
          )}
          keyExtractor={item => item?.title}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    alignSelf: 'center',
  },
});
export default HomeScreen;
