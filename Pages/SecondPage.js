import { StyleSheet, Text , Button, View} from 'react-native';
import React from 'react';

function DetailsScreen({navigation}){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>This is Second Page of the App</Text>
        <Button
          title='Go back'
          onPress={()=>navigation.goBack()}
        />
        <Button
          title='Go to SecondPage...again'
          onPress={()=>navigation.push('SecondPage')}
        />
        <Button
          title='Go to First Page'
          onPress={()=>navigation.navigate('FirstPage')}
        />
        <Button
          title='Go to Third Page'
          onPress={()=>navigation.push('ThirdPage')}
        />
        
      </View>
    );
  }

export default DetailsScreen;