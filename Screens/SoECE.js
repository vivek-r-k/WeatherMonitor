import React, { useState } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';

import RenderHourData from '../RenderData/RenderHourData';
import Render10Data from '../RenderData/Render10Data';
import RenderWeekData from '../RenderData/RenderWeekData';

const HourlyTab = () => {
    return (
        <View>
            <ScrollView horizontal contentContainerStyle={{ paddingRight: 16 }}>
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
                <RenderHourData temp={25} humidity={60} air={30} co2={10}time={"8 am"}/>   
            </ScrollView>
        </View>
    );
    }

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

  const [humidityValue, setHumidityValue] = useState(43);

//   useEffect(() => {
//     const LHC_Humidity_Ref = database().ref('/MainBuilding/Humidity');
//     LHC_Humidity_Ref.on('value', snapshot => {
//       const humidityValue = snapshot.val().Value;
//       console.log('LHC Humidity: ', humidityValue);
//       setHumidityValue(humidityValue);
//     });
//   }, []);


  return (
        <>
        <ImageBackground style={styles.backgroundImage} source={require('../Assets/KLElogo.png')}>
        <View style={styles.container}>
            <SafeAreaView>
                <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.7)'  }]}>
                <View style={styles.card}>
                    <Text style={{fontSize:18}}>07-12-2022</Text>
                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>So ECE</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                    <Text style={{ fontSize: 18 }}>Temperature</Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>22°C</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>Humidity       </Text>
                    <Text>|</Text>
                    {humidityValue && <Text style={{ fontSize: 18 }}>{humidityValue}%</Text>}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>Air Pressure      </Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>   900 hpa</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>CO2                   </Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>   900 ppm</Text>
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
