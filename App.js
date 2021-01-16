import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LogIn from './src/screens/LogInScreen.js';
import TimeRestriction from './src/screens/TimeRestrictionScreen.js';


const navigator = createStackNavigator(
  {
    LogIn,
    TimeRestriction
  },
  {
    initialRouteName: 'LogIn',
    defaultNavigationOptions: {
      headerShown: false,
      title: 'calenJARS',
    },
  },
);

export default createAppContainer(navigator);
