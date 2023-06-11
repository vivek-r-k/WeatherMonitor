import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';

import RenderHourData from '../RenderData/RenderHourData';
import Render10Data from '../RenderData/Render10Data';
import RenderWeekData from '../RenderData/RenderWeekData';

import database from '@react-native-firebase/database';

const HourlyTab = () => {
  const [humidityValue, setHumidityValue] = useState(null);
  const [temperatureValue, setTemperatureValue] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [gas, setGas] = useState(null);
  const [date, setDate] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const MainBuilding_Ref = database().ref('/SoECE/');
      MainBuilding_Ref.on('value', snapshot => {
        const data = snapshot.val();
        const timestamps = Object.keys(data);
        const lastTimestamp = timestamps[timestamps.length - 1];
        const lastObject = data[lastTimestamp];
        
        const next = Object.keys(lastObject)[0];
        const humid = lastObject[next].Humidity;
        const temp = lastObject[next].Temperature;
        const press_ure = lastObject[next].Pressure;
        const ga_s = lastObject[next].MQ135_PPM;
        
        setTemperatureValue(temp);
        setHumidityValue(humid);
        setPressure(press_ure);
        setGas(ga_s);
  
        const currentDateTime = new Date();
        const prev = new Date();
        const dateee = [];
        for (var i = 0; i < 24; i++) {
          prev.setHours(currentDateTime.getHours() - i);
          const formattedHour1 = prev.toLocaleString('en-US', {
            hour: 'numeric',
            hour12: true
          });
          dateee.push(formattedHour1);
        }
        setDate(dateee);
        setIsLoading(false);
      });
    };
    fetchData(); // Call the async function
  }, []); 

  return (
    <View>
      <ScrollView horizontal contentContainerStyle={{ paddingRight: 16 }}>
          {
            isLoading ? (
              <View style={{justifyContent: 'center', alignItems:'center'}}>
                <Text style={{ fontSize: 18 }}>Loading...</Text>
              </View>
            ) : (
              <>
              <RenderHourData
                  temp={temperatureValue}
                  humidity={humidityValue}
                  air={pressure}
                  co2={gas}
                  time={date[0]}
                />

              {/* dummy */}
              <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.6}
                  air={830.43+15.31}
                  co2={8.31+2.32}
                  time={date[1]}
                />

              <RenderHourData
                  temp={21+2.3}
                  humidity={45-4.3}
                  air={830.43+15.25}
                  co2={8.31+2.78}
                  time={date[2]}
                />

              <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.8}
                  air={830.43+15.28}
                  co2={8.31+1.39}
                  time={date[3]}
                />

              <RenderHourData
                  temp={21+2.1}
                  humidity={45-4.7}
                  air={830.43+15.9}
                  co2={8.31+2.51}
                  time={date[4]}
                />

              <RenderHourData
                  temp={21+2.7}
                  humidity={45-4.8}
                  air={830.43+15.56}
                  co2={8.31+2.87}
                  time={date[5]}
                />

              <RenderHourData
                  temp={21+1.3}
                  humidity={45-4.7}
                  air={830.43+18.37}
                  co2={8.31+7.45}
                  time={date[6]}
                />

                <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.8}
                  air={830.43+15.28}
                  co2={8.31+1.39}
                  time={date[7]}
                />  

              <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.6}
                  air={830.43+15.31}
                  co2={8.31+2.32}
                  time={date[8]}
                />

              <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.8}
                  air={830.43+15.28}
                  co2={8.31+1.39}
                  time={date[9]}
                />

                <RenderHourData
                  temp={21+2.7}
                  humidity={45-4.8}
                  air={830.43+15.56}
                  co2={8.31+2.87}
                  time={date[10]}
                />

              <RenderHourData
                  temp={21+7.7}
                  humidity={45-2.9}
                  air={830.43+82.31}
                  co2={8.31+2.32}
                  time={date[11]}
                />

                <RenderHourData
                  temp={21+1.3}
                  humidity={45-4.7}
                  air={830.43+18.37}
                  co2={8.31+7.45}
                  time={date[12]}
                />

                <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.8}
                  air={830.43+15.28}
                  co2={8.31+1.39}
                  time={date[13]}
                />  

              <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.6}
                  air={830.43+15.31}
                  co2={8.31+2.32}
                  time={date[14]}
                />

              <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.6}
                  air={830.43+15.31}
                  co2={8.31+2.32}
                  time={date[15]}
                />

                <RenderHourData
                  temp={21+2.1}
                  humidity={45-4.7}
                  air={830.43+15.9}
                  co2={8.31+2.51}
                  time={date[16]}
                />

              <RenderHourData
                  temp={21+2.7}
                  humidity={45-4.8}
                  air={830.43+15.56}
                  co2={8.31+2.87}
                  time={date[17]}
                />

              <RenderHourData
                  temp={21+1.3}
                  humidity={45-4.7}
                  air={830.43+18.37}
                  co2={8.31+7.45}
                  time={date[18]}
                />

                <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.6}
                  air={830.43+15.31}
                  co2={8.31+2.32}
                  time={date[19]}
                />     

                <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.6}
                  air={830.43+15.31}
                  co2={8.31+2.32}
                  time={date[20]}
                />

              <RenderHourData
                  temp={21+2.2}
                  humidity={45-4.8}
                  air={830.43+15.28}
                  co2={8.31+1.39}
                  time={date[21]}
                />

                <RenderHourData
                  temp={21+2.7}
                  humidity={45-4.8}
                  air={830.43+15.56}
                  co2={8.31+2.87}
                  time={date[22]}
                />

              <RenderHourData
                  temp={21+7.7}
                  humidity={45-2.9}
                  air={830.43+82.31}
                  co2={8.31+2.32}
                  time={date[23]}
                />
              </>
            )
          }
      </ScrollView>
    </View>
  );
};

const WeeklyTab = () => {
  return (
      <View>
          <ScrollView horizontal contentContainerStyle={{ paddingRight: 16 }}>
              <RenderWeekData 
                  mintemp={20+1} 
                  maxtemp={30+2} 
                  minhumidity={60-5} 
                  maxhumidity={60+3} 
                  minair={942.08-3} 
                  maxair={951.25+7} 
                  minco2={376.61-4}
                  maxco2={383.49+5}
                  time={"SUN"}
                  />
              <RenderWeekData 
                  mintemp={20-1} 
                  maxtemp={30+5} 
                  minhumidity={60-15} 
                  maxhumidity={60+9} 
                  minair={942.18-33} 
                  maxair={951.2+70} 
                  minco2={376.62-44}
                  maxco2={383.48+25}
                  time={"SAT"}
                  />
              <RenderWeekData 
                  mintemp={20-3} 
                  maxtemp={30+6} 
                  minhumidity={60-25} 
                  maxhumidity={60+6} 
                  minair={942.39-40} 
                  maxair={951.43+41} 
                  minco2={376.18-24}
                  maxco2={383.07+29}
                  time={"FRI"}
                  />
              <RenderWeekData 
                  mintemp={20-0} 
                  maxtemp={30+0} 
                  minhumidity={60-0} 
                  maxhumidity={60+0} 
                  minair={942.1-0} 
                  maxair={951.07+0} 
                  minco2={376.70-0}
                  maxco2={383.36+0}
                  time={"THURS"}
                  />
              <RenderWeekData 
                  mintemp={20-3} 
                  maxtemp={30+7} 
                  minhumidity={60-10} 
                  maxhumidity={60+7} 
                  minair={942.53-40} 
                  maxair={951.13+30} 
                  minco2={376.86-70}
                  maxco2={383.35+13}
                  time={"WED"}
                  />
              <RenderWeekData 
                  mintemp={20+5} 
                  maxtemp={30+5} 
                  minhumidity={60-5} 
                  maxhumidity={60+7} 
                  minair={942.35-40} 
                  maxair={951.85+30} 
                  minco2={376.62-30}
                  maxco2={383.12+12}
                  time={"TUE"}
                  />
              <RenderWeekData 
                  mintemp={20+4} 
                  maxtemp={30+3} 
                  minhumidity={50+1} 
                  maxhumidity={60+9} 
                  minair={932.42-40} 
                  maxair={941.37+30} 
                  minco2={358.93-30}
                  maxco2={393.37+12}
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
                  mintemp={20+1} 
                  maxtemp={30+2} 
                  minhumidity={60-5} 
                  maxhumidity={60+3} 
                  minair={942.08-3} 
                  maxair={951.25+7} 
                  minco2={376.61-4}
                  maxco2={383.49+5}
                  time={"JUN 10"}
                  />
              <Render10Data 
                  mintemp={20-1} 
                  maxtemp={30+5} 
                  minhumidity={60-15} 
                  maxhumidity={60+9} 
                  minair={942.18-33} 
                  maxair={951.2+70} 
                  minco2={376.62-44}
                  maxco2={383.48+25}
                  time={"JUN 09"}
                  />
              <Render10Data 
                  mintemp={20-3} 
                  maxtemp={30+6} 
                  minhumidity={60-25} 
                  maxhumidity={60+6} 
                  minair={942.39-40} 
                  maxair={951.43+41} 
                  minco2={376.18-24}
                  maxco2={383.07+29}
                  time={"JUN 08"}
                  />
              <Render10Data 
                  mintemp={20-0} 
                  maxtemp={30+0} 
                  minhumidity={60-0} 
                  maxhumidity={60+0} 
                  minair={942.1-0} 
                  maxair={951.07+0} 
                  minco2={376.70-0}
                  maxco2={383.36+0}
                  time={"JUN 07"}
                  />
              <Render10Data 
                  mintemp={20-3} 
                  maxtemp={30+7} 
                  minhumidity={60-10} 
                  maxhumidity={60+7} 
                  minair={942.53-40} 
                  maxair={951.13+30} 
                  minco2={376.86-70}
                  maxco2={383.35+13}
                  time={"JUN 06"}
                  />
              <Render10Data 
                  mintemp={20+5} 
                  maxtemp={30+5} 
                  minhumidity={60-5} 
                  maxhumidity={60+7} 
                  minair={942.35-40} 
                  maxair={951.85+30} 
                  minco2={376.62-30}
                  maxco2={383.12+12}
                  time={"JUN 05"}
                  />
              <RenderWeekData 
                  mintemp={20+4} 
                  maxtemp={30+3} 
                  minhumidity={50+1} 
                  maxhumidity={60+9} 
                  minair={932.42-40} 
                  maxair={941.37+30} 
                  minco2={358.93-30}
                  maxco2={393.37+12}
                  time={"JUN 04"}
                  />
              <Render10Data 
                  mintemp={20-0} 
                  maxtemp={30+0} 
                  minhumidity={60-0} 
                  maxhumidity={60+0} 
                  minair={942.1-0} 
                  maxair={951.07+0} 
                  minco2={376.70-0}
                  maxco2={383.36+0}
                  time={"JUN 03"}
                  />
              <Render10Data 
                  mintemp={20-1} 
                  maxtemp={30+5} 
                  minhumidity={60-15} 
                  maxhumidity={60+9} 
                  minair={942.18-33} 
                  maxair={951.2+70} 
                  minco2={376.62-44}
                  maxco2={383.48+25}
                  time={"JUN 02"}
                  />
              <RenderWeekData 
                  mintemp={20+4} 
                  maxtemp={30+3} 
                  minhumidity={50+1} 
                  maxhumidity={60+9} 
                  minair={932.42-40} 
                  maxair={941.37+30} 
                  minco2={358.93-30}
                  maxco2={393.37+12}
                  time={"JUN 01"}
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
  const [humidityValue, setHumidityValue] = useState(null);
  const [temperatureValue, setTemperatureValue] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [gas, setGas] = useState(null);

  const [date,setDate] = useState(null);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
  const MainBuilding_Ref = database().ref('/SoECE/');
  MainBuilding_Ref.on('value', snapshot => {
      const data = snapshot.val();
      const timestamps = Object.keys(data);
      const lastTimestamp = timestamps[timestamps.length - 1];
      const lastObject = data[lastTimestamp];
      
      const next = Object.keys(lastObject)[0]
      // console.log(lastTimestamp);
      const humid = lastObject[next].Humidity
      const temp = lastObject[next].Temperature
      const press_ure = lastObject[next].Pressure
      const ga_s = lastObject[next].MQ135_PPM
      
      setTemperatureValue(temp)
      setHumidityValue(humid)
      setPressure(press_ure)
      setGas(ga_s)

      const timestamppp = lastTimestamp * 1000;
      const dateObj = new Date(timestamppp);
      const formattedDate = dateObj.toLocaleString('en-US', { month: 'long', day: 'numeric' });

      // console.log(formattedDate);
      
      setDate(formattedDate);
      setIsLoading(false)
    });
  }, []);

  return (
        <>
        <ImageBackground style={styles.backgroundImage} source={require('../Assets/KLElogo.png')}>
        <View style={styles.container}>
            <SafeAreaView>
                <Card style={[{ flexWrap: 'wrap', marginTop: '30%',width: 250, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.8)'  }]}>
                <View style={styles.card}>
                    <Text style={{fontSize:18}}>    {date}</Text>
                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>   So ECE</Text>
                </View>
                {
                  isLoading ? (
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                      <Text style={{ fontSize: 18 }}>Loading...</Text>
                    </View>
                  ) :(
                    <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                    <Text style={{ fontSize: 18 }}>Temperature </Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>{temperatureValue}°C</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>Humidity        </Text>
                    <Text>|</Text>
                    {humidityValue && <Text style={{ fontSize: 18 }}>{humidityValue}%</Text>}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>Air Pressure     </Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>   {pressure} hPa</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>Air Quality        </Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>   {gas} ppm</Text>
                    </View>
                </View>
                  )
                }
                </Card>
            </SafeAreaView>
        </View>
        <View>
            <Card style={{ backgroundColor: 'rgba(231, 238, 208, 0.8)' }}>
            <Card.Content>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    overflow: 'hidden',
    opacity: 0.7,
  },
  card:{ 
    height: '50%', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: '-5%'
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
