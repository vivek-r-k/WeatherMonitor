import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Table, Row, Rows } from 'react-native-table-component';
import TempIcon from 'react-native-vector-icons/FontAwesome5'
import HumidIcon from 'react-native-vector-icons/SimpleLineIcons'

const HourlyTab = () => {
    return (
        <View>
            <ScrollView horizontal contentContainerStyle={{ paddingRight: 16 }}>
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>8 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>9 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>10 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>11 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>12 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>01 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>02 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>03 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>04 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>05 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>06 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>07 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>08 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>09 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>10 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>11 pm</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>12 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>01 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>02 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>03 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>04 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>05 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>06 am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', marginTop: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 18 }}>30%</Text>
                            <HumidIcon name="drop" size={30}/>
                            <Text style={{ fontSize: 18, marginTop:10 }}>15°C</Text>
                            <TempIcon name="cloud-sun-rain" size={30} />
                            <Text style={{ fontSize: 18 }}>07 am</Text>
                        </View>
                        
                        
                    </ScrollView>
        </View>
    );
    }

    const WeeklyTab = () => {
        const tableHead = ['Day', 'Temperature', 'Humidity'];
        const tableData = [
            ['Monday', '70°F', '60%'],
            ['Tuesday', '72°F', '55%'],
            ['Wednesday', '74°F', '50%'],
            ['Thursday', '76°F', '45%'],
            ['Friday', '78°F', '40%'],
            ['Saturday', '80°F', '35%'],
            ['Sunday', '82°F', '30%'],
    ];

    return (
        <ScrollView>
            <View style={{flex:1, marginTop:5}}>
            <Table borderStyle={{ borderWidth: 1 }}>
                <Row
                data={tableHead}
                style={styles.head}
                textStyle={styles.text}
                />
                <Rows 
                data={tableData} 
                textStyle={styles.text} 
                />
            </Table>
            </View>
        </ScrollView>
    );
    }

    const FifteenDaysTab = () => {
        const tableHead = ['Date', 'Temperature', 'Humidity'];
        const tableData = [
            ['07-12-2022', '70°F', '60%'],
            ['08-12-2022', '72°F', '55%'],
            ['09-12-2022', '78°F', '40%'],
            ['10-12-2022', '74°F', '50%'],
            ['11-12-2022', '76°F', '45%'],
            ['12-12-2022', '78°F', '40%'],
            ['13-12-2022', '80°F', '35%'],
            ['14-12-2022', '82°F', '30%'],
            ['15-12-2022', '78°F', '40%'],
            ['16-12-2022', '70°F', '60%'],
            ['17-12-2022', '78°F', '40%'],
            ['18-12-2022', '70°F', '60%'],
            ['20-12-2022', '78°F', '40%'],
            ['21-12-2022', '74°F', '50%'],
            ['22-12-2022', '76°F', '45%'],
    ];

    return (
        <ScrollView>
            <View style={{flex:1, marginTop:5}}>
            <Table borderStyle={{ borderWidth: 1 }}>
                <Row
                data={tableHead}
                style={styles.head}
                textStyle={styles.text}
                />
                <Rows 
                data={tableData} 
                textStyle={styles.text} 
                />
            </Table>
            </View>
        </ScrollView>
    );
    }

export default function MainBuilding() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
        { key: 'hourly', title: 'Hourly' },
        { key: 'weekly', title: 'Weekly' },
        { key: 'fifteen_days', title: '15 days' },
  ]);

  const renderScene = SceneMap({
    hourly: HourlyTab,
    weekly: WeeklyTab,
    fifteen_days: FifteenDaysTab
  });

  return (
        <>
        <ImageBackground style={styles.backgroundImage} source={require('../Assets/KLElogo.png')}>
        <View style={styles.container}>
            <SafeAreaView>
                <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.7)'  }]}>
                <View style={styles.card}>
                    <Text style={{fontSize:18}}>07-12-2022</Text>
                    <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>MainBuilding</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                    <Text style={{ fontSize: 18 }}>Temperature</Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>22°C</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18 }}>Humidity</Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 18 }}>45%</Text>
                    </View>
                </View>
                </Card>
            </SafeAreaView>
        </View>
        <View>
            <Card style={{ backgroundColor: 'rgba(231, 238, 208, 0.7)' }}>
            <Card.Content>
                <View style={styles.tabView}>
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
    height: 200,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
})
