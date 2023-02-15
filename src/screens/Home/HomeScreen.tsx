import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import RestaurantCard from '../../components/RestaurantCard';
import {HomeScreenProps} from '../../types/navigation.types';
import SignOut from '../../components/svg/SignOut';
import {CommonActions} from '@react-navigation/native';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const rightAction = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: 'Auth',
                },
              ],
            }),
          )
        }>
        <SignOut fill={'#FFF'} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Header title={'Restaurant List'} rightAction={rightAction()} />
      <RestaurantCard title={''} onPress={() => navigation.navigate('Map')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
