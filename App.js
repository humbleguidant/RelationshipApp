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

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="Listen" component={ListenScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="Expectations" component={ExpectationsScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="WarningSigns" component={WarningSignsScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="HotSpots" component={HotSpotsScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="Conflict" component={ConflictScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="ProblemSolving" component={ProblemSolvingScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="GoodForTwo" component={GoodForTwoScreen} options={{headerMode: 'none', headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

