/*
Author: Aubrey Nickerson
Date: August 1st, 2020
Program: App.js
Project: Relationship App

This is the core of the app. It contains all of the
components that make the app function.
All of the required libraries are imported here.
Every screen is set up here. 
*/

// Import all screens and libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import HomeScreen from './components/HomeScreen';
import ListenScreen from './components/ListenScreen';
import ExpectationsScreen from './components/ExpectationsScreen';
import WarningSignsScreen from './components/WarningSignsScreen';
import HotSpotsScreen from './components/HotSpotsScreen';
import ConflictScreen from './components/ConflictScreen';
import ProblemSolvingScreen from './components/ProblemSolvingScreen';
import GoodForTwoScreen from './components/GoodForTwoScreen';

// Run the app
const Stack = createStackNavigator();
function App() {
  return (
    
    // Set up navigation
    <NavigationContainer>
     // Initial screen will be login screen
        <Stack.Navigator initialRouteName="Login">
    // Login screen
          <Stack.Screen name="Login" component={LoginScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Register screen
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Forgot Password screen
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Home screen
          <Stack.Screen name="Home" component={HomeScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Listen screen
          <Stack.Screen name="Listen" component={ListenScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Expectations screen
          <Stack.Screen name="Expectations" component={ExpectationsScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Warning Signs screen
          <Stack.Screen name="WarningSigns" component={WarningSignsScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Hot Spots screen
          <Stack.Screen name="HotSpots" component={HotSpotsScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Conflict screen
          <Stack.Screen name="Conflict" component={ConflictScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Problem Solving screen
          <Stack.Screen name="ProblemSolving" component={ProblemSolvingScreen} options={{headerMode: 'none', headerShown: false}}/>
    // Good For Two screen
          <Stack.Screen name="GoodForTwo" component={GoodForTwoScreen} options={{headerMode: 'none', headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

