import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import All from '../Screens/All';
import Home from '../Screens/Home';
import IndLocations from '../Screens/IndLocations';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        // TODO:
        options={({route}) => ({
            // title: route.params.userName, //refer chatscreen.js
            headerBackTitleVisible: false,
        })}
        />
  </Stack.Navigator>
);

const AllLoc = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="AllLocation"
      component={All}
    //   TODO:
      options={({route}) => ({
        // title: route.params.userName, //refer chatscreen.js
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const IndLoc = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Hour"
      component={IndLocations}
      options={{
        headerShown: false,
      }}
    />
    {/* <Stack.Screen
      name="Week"
    //   TODO:
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Week"
    //   TODO:
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    /> */}
  </Stack.Navigator>
);

const AppStack = () => {
    return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'AllLocation') {
              iconName = focused ? 'md-people' : 'md-people-outline';
            } else if (route.name === 'IndividualLocation') {
              iconName = focused ? 'md-person' : 'md-person-outline';
            }
  
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#171F1D',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="AllLocation" component={AllLoc} />
        <Tab.Screen name="IndividualLocation" component={IndLoc} />
      </Tab.Navigator>
    );
  };
  

export default AppStack;
