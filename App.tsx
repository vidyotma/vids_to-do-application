import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddTask from './src/Screen/addTasks';
import Home from './src/Screen/home'
import HomeHooks from './src/Screen/homeHooks'
import addTasks from './src/Screen/addTasks';
import Login from './src/Screen/Login'
import LoginModal from './src/Common/LoginModal'
import {Provider} from 'react-redux'
import store from './src/redux/store'
// interface abc  {
//   Home:undefined,
//   addTasks:undefined
// }

export type abc = {
  name:any
  Home:undefined,
  HomeHooks:undefined,
  addTasks:undefined,
  Login:undefined,
  loginModal:undefined
};


const stack = createStackNavigator<abc>()
export default function App() {
  return (
    <Provider store = {store}>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Login' component={Login} />
        <stack.Screen name = 'HomeHooks' component={HomeHooks} />
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='addTask' component={addTasks} />
        {/* <stack.Screen name='loginModal' component={LoginModal} /> */}
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
