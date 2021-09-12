import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import Home from './src/components/Home';
import Users from './src/components/Users';

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="User" component={Users} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Home />
  )
}


export default App;