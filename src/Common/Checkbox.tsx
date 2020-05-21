import React from 'react'
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'

const Checkbox = (props) => {

    
    return (
        <TouchableOpacity onPress={props.func}> 

        {props.isChecked?
        <View style={Style.checkedView}>
            
        </View>:
        <View style={Style.unCheckedView}>
            
        </View>}
        
        </TouchableOpacity>
    )
}
const Style = StyleSheet.create({
    unCheckedView:{
        height:15,
        width:15,
        borderColor:"#000000",
        borderWidth:1,
    },
    checkedView:{
        height:15,
        width:15,
        borderColor:"#000000",
        borderWidth:1,
        backgroundColor:"green"
    },
})
export default Checkbox
