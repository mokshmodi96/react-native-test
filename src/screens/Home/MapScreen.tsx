import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {MapScreenProps} from '../../types/navigation.types';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import Config from 'react-native-config';
import Toast from 'react-native-simple-toast';

const MapScreen: React.FC<MapScreenProps> = ({
  route: {
    params: {selectedRestaurant},
  },
}) => {
  const [position, setPosition] = useState({
    latitude: Number.parseFloat(selectedRestaurant.latitude),
    longitude: Number.parseFloat(selectedRestaurant.longitude),
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const onError = (args: string) => {
    Toast.show(args, 1000);
  };
  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Header title={'Directions'} backButton />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        showsScale
        region={position}>
        <MapViewDirections
          origin={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          destination={{
            latitude: Number.parseFloat(selectedRestaurant.latitude),
            longitude: Number.parseFloat(selectedRestaurant.longitude),
          }}
          apikey={Config.GOOGLE_MAPS_API_KEY as string}
          strokeWidth={3}
          strokeColor="hotpink"
          onError={args => onError(args)}
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
export default MapScreen;
