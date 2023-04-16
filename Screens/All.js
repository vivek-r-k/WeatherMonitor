import React,{useState, useEffect} from "react";
import { Text,View, SafeAreaView, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const All = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground style={styles.backgroundImage} source={require('../Assets/KLElogo.png')}>
        <View style={styles.container}>
                <View style={{marginTop: '30%'}} />
                    <ScrollView contentContainerStyle={styles.container}>
                        <SafeAreaView>
                            <TouchableOpacity onPress={() => navigation.navigate('SoECE')}>
                            <Card style={[{ flexWrap: 'wrap', width: 247, height: 234.23,backgroundColor: 'rgba(255, 255, 255, 0.7)'  }]}>
                            <View style={styles.card}>
                                <Text style={{fontSize:18}}>07-12-2022</Text>
                                <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>So ECE</Text>
                            </View>
                            <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                <Text style={{ fontSize: 18 }}>Temperature</Text>
                                <Text>|</Text>
                                <Text style={{ fontSize: 18 }}>17°C</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                <Text style={{ fontSize: 18 }}>Humidity</Text>
                                <Text>|</Text>
                                <Text style={{ fontSize: 18 }}>45%</Text>
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
                                <Text style={{fontSize:18}}>07-12-2022</Text>
                                <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>Main Building</Text>
                            </View>
                            <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                <Text style={{ fontSize: 18 }}>Temperature</Text>
                                <Text>|</Text>
                                <Text style={{ fontSize: 18 }}>17°C</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                <Text style={{ fontSize: 18 }}>Humidity</Text>
                                <Text>|</Text>
                                <Text style={{ fontSize: 18 }}>45%</Text>
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
                                <Text style={{fontSize:18}}>07-12-2022</Text>
                                <Text style={{fontSize:40, textAlign:'center',fontWeight:'bold'}}>LHC Building</Text>
                            </View>
                            <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                <Text style={{ fontSize: 18 }}>Temperature</Text>
                                <Text>|</Text>
                                <Text style={{ fontSize: 18 }}>17°C</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '5%' }}>
                                <Text style={{ fontSize: 18 }}>Humidity</Text>
                                <Text>|</Text>
                                <Text style={{ fontSize: 18 }}>45%</Text>
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