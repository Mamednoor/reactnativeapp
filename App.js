import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AccelerometerSensor from './components/Accelerometer'
import TabOne from './components/TabOne'
import TabTwo from './components/TabTwo';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab-One" component={TabOne} />
        <Tab.Screen name="Tab-Two" component={TabTwo} />
        <Tab.Screen name="Accelerometer" component={AccelerometerSensor} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}