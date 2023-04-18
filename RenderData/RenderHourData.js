import React from "react";
import { View, Text } from 'react-native';
import TempIcon from 'react-native-vector-icons/FontAwesome5'
import HumidIcon from 'react-native-vector-icons/SimpleLineIcons'
import AirIcon from 'react-native-vector-icons/Entypo'
import CO2Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const RenderHourData = ({temp, humidity, air, co2, time }) => {
    return(
        <View style={{ flexDirection: 'column', marginTop: 7, marginRight: 16 }}>
            <Text style={{ fontSize: 18,textAlign:'center' }}>{temp}°C</Text>
            <View style={{alignSelf:"center"}}><TempIcon name="cloud-sun-rain" size={25} /></View>
            <Text style={{ fontSize: 18, marginTop:10,textAlign:'center' }}>{humidity}%</Text>
            <View style={{alignSelf:"center"}}><HumidIcon name="drop" size={25}/></View>
            <Text style={{fontSize: 18, marginTop:10,textAlign:'center'}}>{air} hpa</Text>
            <View style={{alignSelf:"center"}}><AirIcon name="air" size={25} /></View>
            <Text style={{fontSize: 18, marginTop:10,textAlign:'center'}}>{co2} ppm</Text>
            <View style={{alignSelf:"center"}}><CO2Icon name="smoke" size={25} /></View>
            <Text style={{ fontSize: 18, marginTop: 10,textAlign:'center',fontWeight:'bold'}}>{time}</Text>
        </View>
    )
}

export default RenderHourData