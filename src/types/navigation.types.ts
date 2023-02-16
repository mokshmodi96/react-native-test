import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Restaurant} from './restaurants.types';

export type MainRoutes = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackRoutes = {
  Login: undefined;
};
export type MainStackRoutes = {
  Home: undefined;
  Map: {selectedRestaurant: Restaurant};
};

export type LoginScreenProps = NativeStackScreenProps<AuthStackRoutes, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<MainStackRoutes, 'Home'>;
export type MapScreenProps = NativeStackScreenProps<MainStackRoutes, 'Map'>;
