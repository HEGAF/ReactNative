import { StyleSheet, Text , Button, View} from 'react-native';
import React from 'react';

function DetailsScreen({navigation}){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>This is Third Page of the App</Text>
        <Button
          title='Go back'
          onPress={()=>navigation.goBack()}
        />
        <Button
          title='Go to SecondPage'
          onPress={()=>navigation.push('SecondPage')}
        />
        <Button
          title='Reset navigation to first page'
          onPress={()=>navigation.navigate('FirstPage')}
        />
        
      </View>
    );
  }

export default DetailsScreen;