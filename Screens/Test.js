import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import database from '@react-native-firebase/database';

const Test = () => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    fetchHourlyData();
  }, []);

  const fetchHourlyData = async () => {
    try {
      const currentTime = new Date();
      const startTime = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        currentTime.getHours() - 24 // Fetch data for the last 24 hours
      );

      const snapshot = await database()
        .ref('LHCBuilding/')
        .orderByChild('Timestamp')
        .startAt(startTime.toISOString())
        .endAt(currentTime.toISOString())
        .once('value');

      if (snapshot.exists()) {
        const data = snapshot.val();
        processHourlyData(data);
      } else {
        console.log('No data found.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const processHourlyData = (data) => {
    const hourlyDataArray = [];

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const item = data[key];
        const timestamp = new Date(item.Timestamp);
        const timeline = timestamp.getHours() + ':' + timestamp.getMinutes();

        hourlyDataArray.push({
          temperature: item.Temperature,
          humidity: item.Humidity,
          pressure: item.Pressure,
          timeline: timeline,
        });
      }
    }

    setHourlyData(hourlyDataArray);
  };

  return (
    <View>
      {hourlyData.map((dataItem, index) => (
        <View key={index}>
          <Text>Temperature: {dataItem.temperature}</Text>
          <Text>Humidity: {dataItem.humidity}</Text>
          <Text>Pressure: {dataItem.pressure}</Text>
          <Text>Timeline: {dataItem.timeline}</Text>
        </View>
      ))}
    </View>
  );
};

export default Test;
