import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import MapScreen from '../screens/Home/MapScreen';
import {MainStackRoutes} from '../types/navigation.types';

const Stack = createNativeStackNavigator<MainStackRoutes>();
const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
