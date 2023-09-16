import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './Pages/FirstPage.js';
import SecondPage from './Pages/SecondPage.js';
import ThirdPage from './Pages/ThirdPage.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 14,
          },
        }}
      >
        <Stack.Screen
          name='FirstPage'
          component={FirstPage}
          options={{ title: 'FirstPage' }}
        />
        <Stack.Screen
          name='SecondPage'
          component={SecondPage}
          options={{ title: 'SecondPage' }}
        />
        <Stack.Screen
          name='ThirdPage'
          component={ThirdPage}
          options={{ title: 'ThirdPage' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;