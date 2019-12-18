import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Screen
import HomeActivity from '../screen/home/HomeActivity';
import ExChangeActivity from '../screen/change/ExChangeActivity';
import NotificationActivity from '../screen/notifications/NotificationActivity';
import MessageActivity from '../screen/message/MessageActivity';
import ProfileActivity from '../screen/profile/ProfileActivity';

// Login and Register
import LoginActivity from '../screen/regiterandlogin/LoginActivity';
import RegisterActivity from '../screen/regiterandlogin/RegisterActivity';

// Splash
import SplashActivity from '../screen/splash/SplashActivity';

// Profile
import EditProfileActivity from '../screen/profile/EditProfileActivity';
import IconProvider from '../components/IconProvider';
const BottomNavigation = createStackNavigator(
  {
    default: createBottomTabNavigator({
      Profile: {
        screen: ProfileActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="user" size={24} color={tintColor} />
          ),
        },
      },
      Home: {
        screen: HomeActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={24} color={tintColor} />
          ),
        },
      },
      ExChange: {
        screen: ExChangeActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="search" size={24} color={tintColor} />
          ),
        },
      },
      Trade: {
        screen: MessageActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="plus-circle" size={24} color={tintColor} />
          ),
        },
      },
      Notification: {
        screen: NotificationActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="heart" size={24} color={tintColor} />
          ),
        },
      },
    }),
  },
  {
    headerMode: 'none',
  },
);

const AppNavigation = createStackNavigator({
  EditProfile: {
    screen: EditProfileActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SplashActivity: {
    screen: SplashActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Login: {
    screen: LoginActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: RegisterActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default createAppContainer(
  createSwitchNavigator({
    Auth: AppNavigation,
    BottomNavigation: BottomNavigation,
  }),
);
