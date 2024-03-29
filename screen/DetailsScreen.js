import { StyleSheet, Text , Button, View} from 'react-native';
import React from 'react';

function DetailsScreen({navigation}){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Detail Screen</Text>
        <Button
          title='Go to Details...again'
          onPress={()=>navigation.push('Details')}
        />
        <Button
          title='Go to Home'
          onPress={()=>navigation.navigation('Home')}
        />
        <Button
          title='Go back'
          onPress={()=>navigation.goBack()}
        />
      </View>
    );
  }

export default DetailsScreen;