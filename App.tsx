import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import RNBootSplash from 'react-native-bootsplash';
const App: React.FC = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} translucent animated />
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
