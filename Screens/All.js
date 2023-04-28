import React,{useState, useEffect} from "react";
import { Text,View, SafeAreaView, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import database from '@react-native-firebase/database';

const All = () => {
    const navigation = useNavigation();

    // SoECE
    // Humidity
    const [humidityValue1, setHumidityValue1] = useState(null);
    const [date1,setDate1] = useState(null);

    useEffect(() => {
    const SoECE_Humidity_Ref = database().ref('/SoECE/');
    SoECE_Humidity_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const humidityValue = latestData.Humidity;
        console.log('LHC Humidity: ', humidityValue);
        setHumidityValue1(humidityValue);

        console.log('LatestKey: ',latestKey);

        const date = new Date(latestKey * 1000);
        const formattedDate = date.toLocaleDateString();
        console.log('Date: ',formattedDate);
        setDate1(formattedDate);
    });
    }, []);

    // Temperature
    const [temperatureValue1, setTemperatureValue1] = useState(null);

    useEffect(() => {
    const SoECE_Temperature_Ref = database().ref('/SoECE/');
    SoECE_Temperature_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const temperatureValue = latestData.Temperature;
        console.log('LHC Temperature: ', temperatureValue);
        setTemperatureValue1(temperatureValue);
    });
    }, []);

    // Air Pressure

    const [airValue1, setAirValue1] = useState(null);

    useEffect(() => {
    const SoECE_Air_Ref = database().ref('/SoECE/');
    SoECE_Air_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const airValue = latestData.Humidity;
        console.log('LHC Air Pressure: ', airValue);
        setAirValue1(airValue);
    });
    }, []);

    // CO2

    const [CO2Value1, setCO2Value1] = useState(null);

    useEffect(() => {
    const SoECE_CO2_Ref = database().ref('/SoECE/');
    SoECE_CO2_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const CO2Value = latestData.Humidity;
        console.log('LHC CO2 Value: ', CO2Value);
        setCO2Value1(CO2Value);
    });
    }, []);

    // Lhc
    // Humidity
    const [humidityValue, setHumidityValue] = useState(null);
    const [date,setDate] = useState(null);

    useEffect(() => {
    const LHC_Humidity_Ref = database().ref('/LHCBuilding/');
    LHC_Humidity_Ref.on('value', snapshot => {
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
    const LHC_Temperature_Ref = database().ref('/LHCBuilding/');
    LHC_Temperature_Ref.on('value', snapshot => {
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
    const LHC_Air_Ref = database().ref('/LHCBuilding/');
    LHC_Air_Ref.on('value', snapshot => {
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
    const LHC_CO2_Ref = database().ref('/LHCBuilding/');
    LHC_CO2_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const CO2Value = latestData.Humidity;
        console.log('LHC CO2 Value: ', CO2Value);
        setCO2Value(CO2Value);
    });
    }, []);

    // Main building
    // Humidity
    const [humidityValue3, setHumidityValue3] = useState(null);
    const [date3,setDate3] = useState(null);

    useEffect(() => {
    const Main_Humidity_Ref = database().ref('/MainBuilding/');
    Main_Humidity_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const humidityValue = latestData.Humidity;
        console.log('LHC Humidity: ', humidityValue);
        setHumidityValue3(humidityValue);

        console.log('LatestKey: ',latestKey);

        const date = new Date(latestKey * 1000);
        const formattedDate = date.toLocaleDateString();
        console.log('Date: ',formattedDate);
        setDate3(formattedDate);
    });
    }, []);

    // Temperature
    const [temperatureValue3, setTemperatureValue3] = useState(null);

    useEffect(() => {
    const Main_Temperature_Ref = database().ref('/MainBuilding/');
    Main_Temperature_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const temperatureValue = latestData.Temperature;
        console.log('LHC Temperature: ', temperatureValue);
        setTemperatureValue3(temperatureValue);
    });
    }, []);

    // Air Pressure

    const [airValue3, setAirValue3] = useState(null);

    useEffect(() => {
    const Main_Air_Ref = database().ref('/MainBuilding/');
    Main_Air_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const airValue = latestData.Humidity;
        console.log('LHC Air Pressure: ', airValue);
        setAirValue3(airValue);
    });
    }, []);

    // CO2

    const [CO2Value3, setCO2Value3] = useState(null);

    useEffect(() => {
    const Main_CO2_Ref = database().ref('/LHCBuilding/');
    Main_CO2_Ref.on('value', snapshot => {
        const values = snapshot.val();
        const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
        const latestKey = keys[0];
        const latestData = values[latestKey];
        const CO2Value = latestData.Humidity;
        console.log('LHC CO2 Value: ', CO2Value);
        setCO2Value3(CO2Value);
    });
    }, []);

    return(
        <ImageBackground style={styles.backgroundImage} source={require('../Assets/KLElogo.png')}>
        <View style={styles.container}>
                <View style={{marginTop: '30%'}} />
                    <ScrollView contentContainerStyle={styles.container}>
                        <SafeAreaView>
                            <TouchableOpacity onPress={() => navigation.navigate('SoECE')}>
                            <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.7)'  }]}>
                                <View style={styles.card}>
                                    <Text style={{fontSize:18}}>{date1}</Text>
                                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>So ECE</Text>
                                </View>
                                <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                    <Text style={{ fontSize: 18 }}>Temperature</Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>{temperatureValue1}°C</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Humidity       </Text>
                                    <Text>|</Text>
                                    {humidityValue1 && <Text style={{ fontSize: 18 }}>{humidityValue1}%</Text>}
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Air Pressure      </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {airValue1} hpa</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>CO2                   </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {CO2Value1} ppm</Text>
                                    </View>
                                </View>
                            </Card>
                            </TouchableOpacity>
                        </SafeAreaView>
                        
                        <View style={{marginTop: '10%'}} />

                        <SafeAreaView>
                            <TouchableOpacity onPress={() => navigation.navigate('MainBuilding')}>
                            <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.7)'  }]}>
                                <View style={styles.card}>
                                    <Text style={{fontSize:18}}>{date3}</Text>
                                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>Main Building</Text>
                                </View>
                                <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                    <Text style={{ fontSize: 18 }}>Temperature</Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>{temperatureValue3}°C</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Humidity       </Text>
                                    <Text>|</Text>
                                    {humidityValue3 && <Text style={{ fontSize: 18 }}>{humidityValue3}%</Text>}
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>Air Pressure      </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {airValue3} hpa</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 18 }}>CO2                   </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 18 }}>   {CO2Value3} ppm</Text>
                                    </View>
                                </View>
                            </Card>
                            </TouchableOpacity>
                        </SafeAreaView>
                        
                        <View style={{marginTop: '10%'}} />

                        <SafeAreaView>
                            <TouchableOpacity onPress={() => navigation.navigate('LHC')}>
                            <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.7)'  }]}>
                                <View style={styles.card}>
                                    <Text style={{fontSize:18}}>{date}</Text>
                                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>LHC Building</Text>
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
                            </TouchableOpacity>
                        </SafeAreaView>
                        
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
  })