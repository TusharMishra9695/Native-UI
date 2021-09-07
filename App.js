import React from "react";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Container/HomeScreen';
import DetailScreen from './Container/DetailScreen';
const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
         <Stack.Screen name="Details" component={DetailScreen} ></Stack.Screen>
        </Stack.Navigator>
</NavigationContainer>
  );
}

