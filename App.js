import 'react-native-gesture-handler';
//import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import login from './screens/login';
import welcomeScreen from './screens/welcomeScreen'
import register from './screens/register'
import home from './screens/home'
import adminPage from './Admin/adminPage'
import adminRegisterClub from './Admin/adminRegisterClub'
import TabNavigator from './Admin/AdminNavigator'
import studentAnnouncementsPage from './Student/studentAnnouncementsPage'
import AdminProfile from './Admin/AdminProfile'
import studentClubsPage from './Student/studentClubsPage'
import studentHomePage from './Student/studentHomePage'
import studentNavigator from './Student/studentNavigator'
import studentProfile from './Student/studentProfile'
import adminResetPassword from './Admin/adminResetPassword'
import clubHomePage from './Club/clubHomePage'
import adminEditProfile from './Admin/adminEditProfile'
import studentEditProfile from './Student/studentEditProfile'
import clubEditProfile from './Club/clubEditProfile'
import studentResetPassword from './Student/studentResetPassword'
import clubNavigator from './Club/clubNavigator'
import clubHomePageD from './Club/clubHomePageD'
import clubProfile from './Club/clubProfile'
import clubResetPassword from './Club/clubResetPassword'




//import { withNavigation } from 'react-navigation';
const navigator = createStackNavigator(
  {
    Login: login,
    welcomeScreen: welcomeScreen,
    register: register,
    home: home,
    adminPage: adminPage,
    adminRegisterClub: adminRegisterClub,
    TabNavigator: TabNavigator,
    studentHomePage:studentHomePage,
    studentClubsPage:studentClubsPage,
    studentAnnouncementsPage:studentAnnouncementsPage,
    studentProfile:studentProfile,
    studentNavigator:studentNavigator,
    AdminProfile:AdminProfile,
    adminResetPassword: adminResetPassword,
    clubHomePage:clubHomePage,
    adminEditProfile:adminEditProfile,
    studentEditProfile:studentEditProfile,
    studentResetPassword:studentResetPassword,
    clubNavigator:clubNavigator,
    clubHomePageD:clubHomePageD,
    clubProfile:clubProfile,
    clubEditProfile:clubEditProfile,
    clubResetPassword:clubResetPassword,

    
  },
  {
    initialRouteName: "welcomeScreen",
    defaultNavigationOptions: {
      title: "KSUClubs",
      headerLeft: null
    }
  }
);

export default createAppContainer(navigator);
