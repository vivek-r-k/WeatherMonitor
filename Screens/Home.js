import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, Text } from 'react-native';
import { Card } from 'react-native-paper';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const initialRegion = {
        latitude: 15.37,
        longitude: 75.122,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01 * (Dimensions.get("window").width / Dimensions.get("window").height),
        zoomEnabled: true,
        zoomTapEnabled: true,
        zoomControlEnabled: true,
        minZoomLevel: 5,
        maxZoomLevel: 20,
        zoomLevel: 16.96
      };
      
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={styles.backgroundImage} source={require('../Assets/KLElogo.png')}>
        <View style={{ position: 'absolute', bottom: 64, left: 0, right: 0 }}>
          <Card style={{ margin: 16, borderRadius:20 }}>
            <MapView style={{ height: 600 }} initialRegion={initialRegion}>
              <Marker 
                coordinate={{ latitude: 15.3693159, longitude: 75.1208535 }} 
                onPress={() => navigation.navigate('MainBuilding')}
                title="Main Building"
                >
                <Icon name="location-pin" size={70} color="#DA3A3A" />
                <Callout>
                    <Text>Main Building</Text>
                </Callout>
              </Marker>

              <Marker 
                coordinate={{ latitude: 15.3695344, longitude: 75.1227495 }} 
                onPress={() => navigation.navigate('SoECE')}
                title='School Of Electronics and Communication'
                >
                <Icon name="location-pin" size={70} color="#DA3A3A" />
                <Callout>
                    <Text>School Of Electronics and Communication</Text>
                </Callout>
              </Marker>
              <Marker 
                coordinate={{ latitude: 15.37064, longitude: 75.1223911 }} 
                onPress={() => navigation.navigate('LHC')}
                title='LHC Building'
                >
                <Icon name="location-pin" size={70} color="#DA3A3A" />
                <Callout>
                    <Text>LHC Building</Text>
                </Callout>
              </Marker>
            </MapView>
          </Card>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
});
