import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Test1 from './Test1';
import Test2 from './Test2';
import Test4 from './Test4';
import Test5 from './Test5';
import Test3 from './Test3';



const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Test1' screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Scan" component={Test1} />
        <Drawer.Screen name="Paramétrage des ventilateurs" component={Test2} />
        <Drawer.Screen name="Réglage puissance émission" component={Test4} />
        <Drawer.Screen name="Celsius ou Fahrenheit" component={Test5} />
        <Drawer.Screen name="Langue" component={Test3} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}