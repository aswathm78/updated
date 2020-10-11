import React from 'react';
import {  View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


import studentHomePage from './studentHomePage';
import studentAnnouncementsPage from './studentAnnouncementsPage';
import studentClubsPage from './studentClubsPage';
import studentProfile from './studentProfile'

const studentNavigator = createMaterialBottomTabNavigator(
  { 
    Home: {
      screen: studentHomePage,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },


     Clubs: {
      screen: studentClubsPage,
      navigationOptions: {
        tabBarLabel: 'Clubs',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-search'} />
          </View>
        ),
      },
    },

     Announcements: {
      screen: studentAnnouncementsPage,
      navigationOptions: {
        tabBarLabel: 'Announcements',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]} size={25} name={'ios-notifications'} />
          </View>
        ),
       
      },
    },
   

    Profile: {
      screen: studentProfile,
      navigationOptions: {
        tabBarLabel: 'Profile',
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

export default createAppContainer(studentNavigator);