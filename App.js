import { StyleSheet, Text , Button, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '.\screen\HomeScreen.js';
import {DetailsScreen} from '.\screen\DetailsScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{title:'Overview'}}
        />
        <Stack.Screen name ='Details' component={DetailsScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;