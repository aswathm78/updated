import React from 'react';
import {  View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';


//import clubHomePage from './clubHomePage'
import clubPostPage from './clubPostPage'
import clubProfile from './clubProfile'
import clubHomePageD from './clubHomePageD'
// import clubEditProfile from './clubEditProfile'


const clubNavigator = createMaterialBottomTabNavigator(
  { 
    Home: {
      screen: clubHomePageD,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },


       Add: {
      screen: clubPostPage,
      navigationOptions: {
        tabBarLabel: 'Post',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]} size={25} name={'ios-add-circle'} />
          </View>
        ),
       
      },
    },
   

    Profile: {
      screen: clubProfile,
      navigationOptions: {
        tabBarLabel: 'Profile1',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]} size={25} name={'ios-person'} />
          </View>
        ),
       
      },
    },


  },

     
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: 'f0edf6',
    barStyle: { backgroundColor: '#0C7B93' },
  }
);

export default createAppContainer(clubNavigator);