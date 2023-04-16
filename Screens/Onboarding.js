import React, { useEffect } from 'react';
import { View, Image,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      AsyncStorage.setItem('alreadyLaunched', 'true');
      navigation.replace('HomeMap');
    }, 1500); // Change this number to adjust the duration of the onboarding screen in milliseconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={styles.backgroundImage} resizeMode='cover' source={require('../Assets/image.png')} />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
});
