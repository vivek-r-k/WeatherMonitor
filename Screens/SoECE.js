import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';

import RenderHourData from '../RenderData/RenderHourData';
import Render10Data from '../RenderData/Render10Data';
import RenderWeekData from '../RenderData/RenderWeekData';

import database from '@react-native-firebase/database';

const HourlyTab = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const db = database().ref('SoECE');
  
      db.on('value', snapshot => {
        const items = snapshot.val();
        const dataArray = [];
  
        for (let item in items) {
          dataArray.push({
            timestamp: item,
            ...items[item],
          });
        }
  
        setData(dataArray);
      });
  
      return () => db.off('value');
    }, []);
  
    return (
      <View>
        <ScrollView horizontal contentContainerStyle={{ paddingRight: 16 }}>
          {data.map(item => (
            <RenderHourData
              key={item.timestamp}
              temp={item.Temperature}
              humidity={item.Humidity}
              air={item.Pressure}
              co2={item.Gas}
              time={new Date(parseInt(item.timestamp) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            />
          ))}
        </ScrollView>
      </View>
    );
  };

const WeeklyTab = () => {
    return (
        <View>
            <ScrollView horizontal contentContainerStyle={{ paddingRight: 16 }}>
                <RenderWeekData 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"MON"}
                    />
                <RenderWeekData 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"MON"}
                    />
                <RenderWeekData 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"MON"}
                    />
                <RenderWeekData 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"MON"}
                    />
                <RenderWeekData 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"MON"}
                    />
                <RenderWeekData 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"MON"}
                    />
                <RenderWeekData 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"MON"}
                    />
            </ScrollView>
        </View>
    )
    }

const FifteenDaysTab = () => {
    return (
        <View>
            <ScrollView horizontal contentContainerStyle={{ paddingRight: 16 }}>
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
                <Render10Data 
                    mintemp={25} 
                    minhumidity={60} 
                    minair={30} 
                    minco2={10}
                    maxtemp={25} 
                    maxhumidity={60} 
                    maxair={30} 
                    maxco2={10}
                    time={"Dec 07"}
                />
            </ScrollView>
        </View>
    );
    }

export default function SoECE() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
        { key: 'hourly', title: 'Hourly' },
        { key: 'weekly', title: 'Week' },
        { key: 'fifteen_days', title: '10 days' },
  ]);

  const renderScene = SceneMap({
    hourly: HourlyTab,
    weekly: WeeklyTab,
    fifteen_days: FifteenDaysTab
  });

  //   For recent data
// Humidity
const [humidityValue, setHumidityValue] = useState(null);
const [date,setDate] = useState(null);

useEffect(() => {
const SoECE_Humidity_Ref = database().ref('/SoECE/');
SoECE_Humidity_Ref.on('value', snapshot => {
    const values = snapshot.val();
    const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
    const latestKey = keys[0];
    const latestData = values[latestKey];
    const humidityValue = latestData.Humidity;
    console.log('LHC Humidity: ', humidityValue);
    setHumidityValue(humidityValue);

    console.log('LatestKey: ',latestKey);

    const date = new Date(latestKey * 1000);
    const formattedDate = date.toLocaleDateString();
    console.log('Date: ',formattedDate);
    setDate(formattedDate);
});
}, []);

// Temperature
const [temperatureValue, setTemperatureValue] = useState(null);

useEffect(() => {
const SoECE_Temperature_Ref = database().ref('/SoECE/');
SoECE_Temperature_Ref.on('value', snapshot => {
    const values = snapshot.val();
    const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
    const latestKey = keys[0];
    const latestData = values[latestKey];
    const temperatureValue = latestData.Temperature;
    console.log('LHC Temperature: ', temperatureValue);
    setTemperatureValue(temperatureValue);
});
}, []);

// Air Pressure

const [airValue, setAirValue] = useState(null);

useEffect(() => {
const SoECE_Air_Ref = database().ref('/SoECE/');
SoECE_Air_Ref.on('value', snapshot => {
    const values = snapshot.val();
    const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
    const latestKey = keys[0];
    const latestData = values[latestKey];
    const airValue = latestData.Humidity;
    console.log('LHC Air Pressure: ', airValue);
    setAirValue(airValue);
});
}, []);

// CO2

const [CO2Value, setCO2Value] = useState(null);

useEffect(() => {
const SoECE_CO2_Ref = database().ref('/SoECE/');
SoECE_CO2_Ref.on('value', snapshot => {
    const values = snapshot.val();
    const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
    const latestKey = keys[0];
    const latestData = values[latestKey];
    const CO2Value = latestData.Humidity;
    console.log('LHC CO2 Value: ', CO2Value);
    setCO2Value(CO2Value);
});
}, []);

  return (
        <>
        <ImageBackground style={styles.backgroundImage} source={require('../Assets/KLElogo.png')}>
        <View style={styles.container}>
            <SafeAreaView>
                <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.7)'  }]}>
                <View style={styles.card}>
                    <Text style={{fontSize:18}}>{date}</Text>
                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>So ECE</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                    <Text style={{ fontSize: 18 }}>Temperature</Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>{temperatureValue}°C</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>Humidity       </Text>
                    <Text>|</Text>
                    {humidityValue && <Text style={{ fontSize: 18 }}>{humidityValue}%</Text>}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>Air Pressure      </Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>   {airValue} hpa</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>CO2                   </Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>   {CO2Value} ppm</Text>
                    </View>
                </View>
                </Card>
            </SafeAreaView>
        </View>
        <View>
            <Card style={{ backgroundColor: 'rgba(231, 238, 208, 0.7)' }}>
            <Card.Content>
                {/* TODO:
                <View style={{height: routes[0].key =='weekly' ? 400 : 300}}> */}
                <View style={{height: 380}}>
                    <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    />
                </View>
            </Card.Content>
            </Card>
        </View>
        </ImageBackground>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    overflow: 'hidden',
    opacity: 0.7,
  },
  card:{ 
    height: '50%', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch',
  },
  tabView: {
    height: 410,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
})
