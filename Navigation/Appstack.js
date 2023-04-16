import React,{useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage'

import All from '../Screens/All';
import Home from '../Screens/Home';
import SoECE from '../Screens/SoECE';
import MainBuilding from '../Screens/MainBuilding';
import LHC from '../Screens/LHC';
import OnboardingScreen from '../Screens/Onboarding';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        // TODO:
        options={({route}) => ({
            headerBackTitleVisible: false,
            headerShown: false
        })}
        />
        <Stack.Screen
        name="HomeMap"
        component={Home}
        // TODO:
        options={({route}) => ({
            headerBackTitleVisible: false,
            headerShown: false
        })}
        />
        <Stack.Screen
        name="SoECE"
        component={SoECE}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="MainBuilding"
        component={MainBuilding}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="LHC"
        component={LHC}
        options={{
          headerShown: false,
        }}
        />
  </Stack.Navigator>
);

const AllLoc = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="AllLocations"
      component={All}
    //   TODO:
      options={({route}) => ({
        headerShown: false,
        headerBackTitleVisible: false,
      })}
    />
    <Stack.Screen
      name="SoECE"
      component={SoECE}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MainBuilding"
      component={MainBuilding}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="LHC"
      component={LHC}
      options={{
        headerShown: false,
      }}
    />
    
  </Stack.Navigator>
);

const AppStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); 
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null; 
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Home';
  }
    return (
      <Tab.Navigator
        initialRouteName={routeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'AllLocation') {
              iconName = 'location';
            } 
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
      </Tab.Navigator>
    );
  };
  

export default AppStack;
