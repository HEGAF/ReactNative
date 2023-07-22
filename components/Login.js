import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const checkTextInput = () => {
        if(!name.trim()){
            alert('Plese Enter Name');
            return;
        }

        if(!email.trim()){
            alert('Plese Enter Email');
            return;
        }

        else{
            alert('Success');
            return;
        }
    }

  return (

    <View style = {styles.container}>


        <TextInput

            placeholder = 'Enter Name'
            style = {styles.textInputStyle}
            value = {name}
            onChangeText = { (value) => {setName(value)} }

        />  

        <TextInput

            placeholder = 'Enter Email'
            style = {styles.textInputStyle}
            value = {email}
            onChangeText = { (value) => {setEmail(value)} }

        />  

        <Text>{'\n'}</Text>

        <Button
            title = 'SUBMIT'
            onPress={()=>{checkTextInput()}}
        />

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 35,
    },
    textInputStyle: {
        width:'100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
})