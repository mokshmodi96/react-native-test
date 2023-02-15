import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainRoutes = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackRoutes = {
  Login: undefined;
};
export type MainStackRoutes = {
  Home: undefined;
  Map: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<AuthStackRoutes, 'Login'>;
