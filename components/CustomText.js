import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({Fname, Lname}) => {
    return(
        <View>
            <text>Your First Name is {Fname} and Last name is {Lname}</text>
        </View>
    )

};

const CustomText = () => {
  return (
    <View style={{alignItems:'center',top:350}}>
      <MyCustomTextWith Fname = "Puritas" Lname = "Sanguansethakul"/>
      <MyCustomTextWith Fname = "Hillter" Lname = "Adolf"/>
    </View>
  )
}

export default CustomText