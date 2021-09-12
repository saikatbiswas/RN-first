import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import CustomDrawer from './src/utils/customDrawer';

import Home from './src/components/Home';
import Users from './src/components/Users';

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props)=> <CustomDrawer {...props}/>}
        
        initialRouteName="Home"
        // defaultStatus="open"
        // screenOptions={{
        //   headerStyle: { backgroundColor: 'papayawhip' },
        //   drawerActiveTintColor:"red",
        //   drawerActiveBackgroundColor:"blue",
        //   drawerInactiveTintColor:"orange",
        //   drawerInactiveBackgroundColor:"#f2f2f2",
        //   drawerItemStyle:{marginTop:20}, // item wrapper
        //   drawerLabelStyle:{fontSize:20},// syle of text
          
        //   drawerStyle:{backgroundColor:'green'}// siderawer content
        // }}
      >
        
        <Drawer.Screen 
          name="Home" 
          component={Home}
          options={{
            groupName: 'Section 1',
          }}
        />
        <Drawer.Screen 
          name="Users" 
          component={Users}
          initialParams={{ id:1, codeName:'Iron horse'}}
        />
        <Drawer.Screen 
          name="Users 2" 
          component={Users}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="User" component={Users} /> 
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Home />
  )
}


export default App;