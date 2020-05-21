import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LoginModal = () => {
    return (
        <View style={Style.container}>
            <Text>Modal</Text>
        </View>
    )
}
const Style = StyleSheet.create({
    container:{
        height:"4000",
        width:"100%",
        borderWidth:1,
        borderColor:"#20b2aa",
        backgroundColor:"white"
    }
})
export default LoginModal
