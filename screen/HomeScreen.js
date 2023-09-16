import { StyleSheet, Text , Button, View} from 'react-native'
import React from 'react'

function HomeScreen({route,navigation}){

  const {ItemId} = route.params;

    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Home screen</Text>
        <Text>Initial param : itemId - {ItemId}{'\n'} </Text>
        <Button
          title='Update param'
          onPress={()=>navigation.setParams({
            ItemId: Math.floor(Math.random()*100)

          })}
        />
        <Text>{'\n'}</Text>
        <Button
          title='Go to Details'
          onPress={()=>navigation.navigate('Details')}
        />
      </View>
    );
  };

export default HomeScreen;