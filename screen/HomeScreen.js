import { StyleSheet, Text , Button, View} from 'react-native'
import React from 'react'

function HomeScreen({navigation}){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>This is First Page of the App</Text>
        <Button
          title='Go to Details'
          onPress={()=>navigation.navigate('Details')}
        />
      </View>
    );
  };

export default HomeScreen;