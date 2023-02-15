import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import RNBootSplash from 'react-native-bootsplash';
import {getSecureValue} from './src/helpers/secureStorage';
import {secureStoreKeys} from './src/constants/secureStoreKeys';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  const navigationRef = useNavigationContainerRef();

  const onReady = async () => {
    const isLoggedIn = await getSecureValue(secureStoreKeys.isLoggedIn);
    if (isLoggedIn) {
      navigationRef.resetRoot({
        index: 0,
        routes: [{name: 'Main'}],
      });
    }
    await RNBootSplash.hide();
  };

  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => onReady()} ref={navigationRef}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} translucent animated />
          <RootStack />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
