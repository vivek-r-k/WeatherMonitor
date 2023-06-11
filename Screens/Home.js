import React,{useState, useEffect} from "react";
import { Text,View, SafeAreaView, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import database from '@react-native-firebase/database';

const All = () => {
    const navigation = useNavigation();

    // SoECE
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

    // Lhc
    //   For recent data
  const [humidityValue1, setHumidityValue1] = useState(null);
  const [temperatureValue1, setTemperatureValue1] = useState(null);
  const [pressure1, setPressure1] = useState(null);
  const [gas1, setGas1] = useState(null);

  const [date1,setDate1] = useState(null);
  const [isLoading1, setIsLoading1] = useState(true)

  useEffect(() => {
  const MainBuilding_Ref = database().ref('/LHC/');
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
      
      setTemperatureValue1(temp)
      setHumidityValue1(humid)
      setPressure1(press_ure)
      setGas1(ga_s)

      const timestamppp = lastTimestamp * 1000;
      const dateObj = new Date(timestamppp);
      const formattedDate = dateObj.toLocaleString('en-US', { month: 'long', day: 'numeric' });

      // console.log(formattedDate);
      
      setDate1(formattedDate);
      setIsLoading1(false)
    });
  }, []);

    // Main building
    //   For recent data
  const [humidityValue2, setHumidityValue2] = useState(null);
  const [temperatureValue2, setTemperatureValue2] = useState(null);
  const [pressure2, setPressure2] = useState(null);
  const [gas2, setGas2] = useState(null);

  const [date2,setDate2] = useState(null);

  const [isLoading2, setIsLoading2] = useState(true)

  useEffect(() => {
  const MainBuilding_Ref = database().ref('/MainBuilding/');
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
      
      setTemperatureValue2(temp)
      setHumidityValue2(humid)
      setPressure2(press_ure)
      setGas2(ga_s)

      const timestamppp = lastTimestamp * 1000;
      const dateObj = new Date(timestamppp);
      const formattedDate = dateObj.toLocaleString('en-US', { month: 'long', day: 'numeric' });

      // console.log(formattedDate);
      
      setDate2(formattedDate);
      setIsLoading2(false)
    });
  }, []);

    return(
        <ImageBackground style={styles.backgroundImage} source={require('../Assets/KLElogo.png')}>
        <View style={styles.container}>
                <View style={{marginTop: '30%'}} />
                    <ScrollView contentContainerStyle={styles.container}>
                        <SafeAreaView>
                            <TouchableOpacity onPress={() => navigation.navigate('SoECE')}>
                            <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.8)'  }]}>
                                <View style={styles.card}>
                                    <Text style={{fontSize:18}}>{date}</Text>
                                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>So ECE</Text>
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
                                    <Text style={{ fontSize: 18 }}>Humidity       </Text>
                                    <Text>|</Text>
                                    {humidityValue && <Text style={{ fontSize: 18 }}>{humidityValue}%</Text>}
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Air Pressure    </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {pressure} hPa</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Air Quality       </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {gas} ppm</Text>
                                    </View>
                                </View>
                                )
                                }
                            </Card>
                            </TouchableOpacity>
                        </SafeAreaView>
                        
                        <View style={{marginTop: '2.5%'}} />

                        <SafeAreaView>
                            <TouchableOpacity onPress={() => navigation.navigate('MainBuilding')}>
                            <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.8)'  }]}>
                                <View style={styles.card}>
                                    <Text style={{fontSize:18}}>{date2}</Text>
                                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}> Main Building</Text>
                                </View>
                                {
                                    isLoading2 ? (
                                        <View style={{justifyContent: 'center', alignItems:'center'}}>
                                    <Text style={{ fontSize: 18 }}>Loading...</Text>
                                    </View>
                                    ) : (
                                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                    <Text style={{ fontSize: 18 }}>Temperature </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>{temperatureValue2}°C</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Humidity       </Text>
                                    <Text>|</Text>
                                    {humidityValue2 && <Text style={{ fontSize: 18 }}>{humidityValue2}%</Text>}
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Air Pressure      </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {pressure2} hPa</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Air Quality         </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {gas2} ppm</Text>
                                    </View>
                                </View>
                                    )
                                }
                                
                            </Card>
                            </TouchableOpacity>
                        </SafeAreaView>
                        
                        <View style={{marginTop: '2.5%'}} />

                        <SafeAreaView>
                            <TouchableOpacity onPress={() => navigation.navigate('LHC')}>
                            <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.8)'  }]}>
                                <View style={styles.card}>
                                    <Text style={{fontSize:18}}>{date1}</Text>
                                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}> LHC Building</Text>
                                </View>
                                {
                                    isLoading1 ? (
                                        <View style={{justifyContent: 'center', alignItems:'center'}}>
                                    <Text style={{ fontSize: 18 }}>Loading...</Text>
                                    </View>
                                    ) : (
                                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                    <Text style={{ fontSize: 18 }}>Temperature </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>{temperatureValue1}°C</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Humidity       </Text>
                                    <Text>|</Text>
                                    {humidityValue && <Text style={{ fontSize: 18 }}>{humidityValue}%</Text>}
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Air Pressure     </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {pressure1} hPa</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Air Quality        </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {gas1} ppm</Text>
                                    </View>
                                </View>
                                    )
                                }
                            </Card>
                            </TouchableOpacity>
                        </SafeAreaView>

                        <View style={{marginTop: '-10%'}} />
                        
                    </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default All

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    backgroundImage: {
      flex: 1,
      resizeMode: 'stretch', // or 'stretch',
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
  })