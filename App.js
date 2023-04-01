import React from 'react';
import { StyleSheet,SafeAreaView,ImageBackground,StatusBar } from 'react-native';
import IndLocations from './Screens/IndLocations' 
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import AppStack from './Navigation/Appstack';

export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ImageBackground style={styles.backgroundImage} source={require('./Assets/KLElogo.png')}>
        {/* <AppStack /> */}
        {/* <Home /> */}
        <IndLocations />
      </ImageBackground>
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch',
  },
})