import {View, Text} from 'react-native'
import React from 'react'

import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


function HomeScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>
        </View>
    )
}


function SettingScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    )
}


// HomeScreen และ SettingScreen ตามเดิม

const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name='Settings' component={SettingScreen}/>
        </Tab.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    )
}

export default App
 