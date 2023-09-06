import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {Provider, useSelector} from 'react-redux';
import {store} from './redux/store';

import Home from './screen/Home';
import Profile from './screen/profile/Profile';
import ChangePassword from './screen/profile/ChangePassword';
import ProfileUpdate from './screen/profile/ProfileUpdate';
import Reward from './screen/Reward';
import Promotion from './screen/Promotion';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Register from './screen/Register';
import Login from './screen/Login';
import PostDetail from './screen/PostDetail';
import RewardHistory from './screen/RewardHistory';
import PointsHistory from './screen/PointsHistory';

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0097A7',
        headerStyle: {backgroundColor: '#00BCD4'},
        headerTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarLabel: 'Promotion',
          tabBarIcon: ({color, size}) => (
            <Feather name="package" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={Reward}
        options={{
          tabBarLabel: 'Reward',
          tabBarIcon: ({color, size}) => (
            <Feather name="gift" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#00BCD4'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={PostDetail} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Stack.Screen name="RewardHistory" component={RewardHistory} />
      <Stack.Screen name="PointsHistory" component={PointsHistory} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#0097A7" />
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
