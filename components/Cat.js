import { View, Text } from 'react-native'
import React from 'react'

const getFullName = (fn, sn, tn) => {
    return fn + " " + sn + " " + tn;
}

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am {getFullName("dog","dog1","dog2")}</Text>
    </View>
  )
}

export default Cat