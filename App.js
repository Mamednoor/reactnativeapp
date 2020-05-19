import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOne from './components/TabOne'
import TabTwo from './components/TabTwo';
import Accelerometer from './components/Accelerometer'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab-One" component={TabOne} />
        <Tab.Screen name="Tab-Two" component={TabTwo} />
        <Tab.Screen name="Accelerometer" component={Accelerometer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}