import { Text, View, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const IncrementCounter = () => {

    const [age, setAge] = useState(23);

    const increment = ()=>{
        setAge(a => a + 1);
    }

  return (
    <View>
      <Text style = {{fontSize:24,fontStyle:'bold'}}>Your age: {age + '\n\n'}</Text>
      
      <Button
        title = '+3'
        onPress={()=> {increment(); increment() ;increment()}}
      />

      <Text>{'\n'}</Text>

      <Button
        title = '+1'
        onPress={increment}
      />
      
    </View>
  )
}

export default IncrementCounter