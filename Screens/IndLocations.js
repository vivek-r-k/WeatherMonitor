// Data from thingspeak
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function IndLocations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.thingspeak.com/channels/1895133/feeds.json?api_key=GWSHHY237I0PRQ8U&results=1')
      .then(response => response.json())
      .then(json => setData(json.feeds))
      .catch(error => console.error(error))
  }, []);

  const renderData = () => {
    return data.map(item => {
      const date = new Date(item.created_at).toLocaleDateString();
      const time = new Date(item.created_at).toLocaleTimeString();
      return (
        <SafeAreaView key={item.entry_id}>
            <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.7)'  }]}>
              <View style={styles.card}>
                <Text style={{fontSize:18}}>{date}</Text>
                <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>So ECE</Text>
              </View>
              <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                  <Text style={{ fontSize: 18 }}>Temperature</Text>
                  <Text>|</Text>
                  <Text style={{ fontSize: 18 }}>{item.field1}°C</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                  <Text style={{ fontSize: 18 }}>Humidity</Text>
                  <Text>|</Text>
                  <Text style={{ fontSize: 18 }}>{item.field2}%</Text>
                </View>
              </View>
            </Card>
        </SafeAreaView>
      )
    })
  }

  return (
        <>
        <View style={styles.container}>{renderData()}</View>
        <View>
            <Card style={{ backgroundColor: 'rgba(231, 238, 208, 0.7)' }}>
                <View style={{ padding: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Weather hourly</Text>
                    <ScrollView horizontal contentContainerStyle={{ paddingRight: 16 }}>
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <Text style={{ fontSize: 18 }}>15°C</Text>
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        
                    </ScrollView>
                    <View style={{borderBottomWidth: 1,borderBottomColor: 'gray',marginVertical: 16,}}/>
                    <View style={{ flexDirection: 'row', marginTop: 16 }}>
                        <View style={{ marginRight: 16 }}>
                            <Text style={{ fontSize: 18, fontWeight:'bold' }}>Hourly</Text>
                        </View>
                        <View style={{ marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>Weekly</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18 }}>15 days</Text>
                        </View>
                    </View>
                </View>
            </Card>
        </View>
        </>
  );
}

// end - data from thingspeak

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
  }
})
