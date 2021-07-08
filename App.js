
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';

import Setting from './screens/Setting';

const Stack = createStackNavigator()

export default function App() {

  return( 
    <NavigationContainer>

      <Stack.Navigator>
        
        <Stack.Screen name ="Home" component={Home}/>
        <Stack.Screen name ="Setting" component={Setting}/>

      </Stack.Navigator>

    </NavigationContainer>
 
  )

}


