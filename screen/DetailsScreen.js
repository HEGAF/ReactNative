import { StyleSheet, Text , Button, View} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

function DetailsScreen(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Detail Screen</Text>
      </View>
    );
  }

export default DetailsScreen;