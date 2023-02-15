import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainRoutes} from '../types/navigation.types';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator<MainRoutes>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
