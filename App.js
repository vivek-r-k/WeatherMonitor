import React from 'react';
import { StyleSheet,SafeAreaView,ImageBackground,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './Navigation/Appstack';
import Test from './Screens/Test';

export default function App() {

  return (
    <NavigationContainer>
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar translucent={true} backgroundColor="transparent" />
        <AppStack />
    </SafeAreaView>
    </NavigationContainer>
    // <Test />
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})