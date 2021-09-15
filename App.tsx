import React from "react";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Container/HomeScreen';
import DetailScreen from "./Container/DetailScreen";
import SchedulerScreen from "./Container/SchedulerScreen";
import Tables from "./components/ScheduleTable";
import { RootStackParamList } from "./interface/interface";
const Stack =createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Scheduler">
        {/* <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
         <Stack.Screen name="Details" component={DetailScreen} ></Stack.Screen> */}
         <Stack.Screen name="Scheduler" component={SchedulerScreen} ></Stack.Screen>
         <Stack.Screen name="ScheduleTable" component={Tables} ></Stack.Screen>
        </Stack.Navigator>
</NavigationContainer>
  );
}

