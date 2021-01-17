import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LogIn from './src/screens/LogInScreen.js';
import TimeRestriction from './src/screens/TimeRestrictionScreen.js';
import SignUp from './src/screens/SignUpScreen'
import AddTask from './src/screens/AddTaskScreen'
import ForgotPw from './src/screens/ForgotPasswordScreen.js';
import Home from './src/screens/HomeScreen.js';
import Todo from './src/screens/TodoScreen.js';


const navigator = createStackNavigator(
  {
    LogIn,
    TimeRestriction,
    SignUp,
    AddTask,
    ForgotPw,
    Home,
    Todo,
  },
  {
<<<<<<< HEAD
    initialRouteName: 'TimeRestriction',
=======
    initialRouteName: 'Home',
>>>>>>> 73438f9788f1953904815a939f6c445b55e4726b
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(navigator);
