import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, FlatList, CheckBox, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import CustomCheckBox from '../Common/Checkbox'
import { connect } from 'react-redux'
import { getList } from '../redux/action'
import { deleteItem } from '../redux/action'



const home = (props) => {
    const [value, setValue] = useState('')
    // const [todo, newTodo] = useState([])
    // const [checked, setChecked] = useState(false)
    //const array1 = ["hello", "hi"]
    let arr = []

    const handletask = () => {
       // setChecked(false)
        props.displayList(value)
        setValue('')

    }
    // const CheckboxFunc = (val) => {
    //     props.listItems.map(item => {
    //         if(item == val){
    //             return <CustomCheckBox style={{backgroundColor:"red"}} /> 
    //         }else{
    //             return <CustomCheckBox />
    //         }
    //     })

        
    // }
    const deleteItem = (val) => {

        props.deleteItem(val)
        // newTodo((prevTodos)=>{
        //     return prevTodos.filter(todo=>todo.key != key)
        // })
    }
    return (
        <View style={Style.Container}>

            <Text style={Style.textStyle}>Add Tasks</Text>
            <View style={Style.inputView}>
                <Feather name='search' style={Style.searchBar} />
                <TextInput
                    placeholder="Enter the task"
                    style={Style.inputBox}
                    onChangeText={(value) => setValue(value)}
                    value={value}
                />
            </View>


            <FlatList
                style={{ left: 20 }}
                data={props.listItems}
                renderItem={({ item }) => (
                    <TouchableOpacity style={Style.listView} onPress={() => deleteItem(item)}>
                        <Text style={{ marginBottom: 5 }}>{item}</Text>
                        
                    </TouchableOpacity>
                )}
            />

            <View style={Style.buttonView}>
                <Button
                    title="add"
                    onPress={handletask}
                    color="#eb8c34"
                />

            </View>
        </View>
    )
}
const mapStateToProps = state => {
    return {
        listItems: state.listofItems
    }
}
const mapDispatchToProps = dispatch => {
    return {
        displayList: (value) => dispatch(getList(value)),
        deleteItem: (value) => dispatch(deleteItem(value))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)

const Style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "flex-start",
        //alignItems: "center",
        // backgroundColor:"#34ebb1"
    },
    textStyle: {
        marginVertical: 8,
        fontSize: 20,
        alignSelf: "center"
    },
    buttonView: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    inputBox: {
        borderWidth: 0,
        borderColor: "gray",
        flex: 1,
        height: 35,
        marginHorizontal: 10
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "gray",
        borderRadius: 15,
        marginHorizontal: 10

    },
    searchBar: {
        fontSize: 40,
    },
    listView: {
        flexDirection: "row",
        flex: 1,
        width: "90%",
        marginTop: 10,
        justifyContent: "space-between"
    }

})