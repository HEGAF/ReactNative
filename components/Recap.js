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
            alert('email: ' + email + '\n' + 'password: ' +name);
            return;
        }
    }

  return (

    <View style = {styles.container}>


        <TextInput

            placeholder = 'Enter Name'
            style = {styles.input}
            value = {name}
            onChangeText = { (value) => {setName(value)} }

        />  

        <TextInput

            placeholder = 'Enter Email'
            style = {styles.input}
            value = {email}
            onChangeText = { (value) => {setEmail(value)} }

        />  

        <Text>{'\n'}</Text>

        <Button
            title = 'SUBMIT'
            style = {styles.submitButton}
            onPress={()=>{
                alert('email: ' + email + '\n' + 'password: ' +name);
            }}
        />

    </View>
  )
}

export default Login

const styles =  StyleSheet.create({
    container : {
        paddingTop :23
    
    },
    input : {
        margin : 15,
        height: 40,
        borderColor : '#7a42f4',
        borderWidth : 1
    },
    submitButton: {
        backgroundColor : '#7a42f4',
        padding : 10,
        margin : 15,
        height : 40,
    },
    submitButtonText : {
        color: 'black'
    }

})