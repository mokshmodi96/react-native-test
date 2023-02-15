import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text} from 'react-native';
import Header from '../../components/Header';
import {MapScreenProps} from '../../types/navigation.types';

const MapScreen: React.FC<MapScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Header title={'Directions'} backButton />
      <Text>Map Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MapScreen;
