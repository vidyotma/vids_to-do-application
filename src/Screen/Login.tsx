import React from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput,TouchableOpacity} from 'react-native'
import LoginModal from '../Common/LoginModal'

const { height, width } = Dimensions.get('window')

const Login = (props) => {
    const {navigate} = props.navigation;
    const goToHome = () => {
        console.log("hurrdghfhgjhj")
        navigate('HomeHooks')
        
    }

    return (
        <View style={Style.container}>
            {/* <Text>Login Screen</Text> */}
            <View style={Style.loginView}>
                <Text style={{marginTop:8,fontWeight:"bold"}}>Login</Text>
                <TextInput
                    style={Style.inputText}
                    placeholder="email"
                />
                <TextInput
                    style={Style.inputText}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={Style.buttonLogin} onPress={goToHome}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <Text style={{bottom:20,position:"absolute"}}>Doesn't have an account signUP</Text>
            </View>
        </View>
    )
}
const Style = StyleSheet.create({
    container: {
        backgroundColor: "#20b2aa",
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
        //flexDirection:"row"
    },
    loginView: {
        height: 0.6 * height,
        width: 0.8 * width,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center"
    },
    inputText: {
        borderBottomColor: "#20b2aa",
        borderBottomWidth: 1,
        width: "80%",
        marginTop: 30
    },
    buttonLogin:{
        backgroundColor:"#20b2aa",
        marginTop: 30,
        height:30,
        width:"70%",
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default Login
