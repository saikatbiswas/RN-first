import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Button, Image } from 'react-native';
import CustomDrawer from './src/utils/customDrawer';

import Home from './src/components/Home';
import Users from './src/components/Users';

const Tab = createBottomTabNavigator();

import Logo from './src/assets/img/shop-sopra.png';

const CustomTabBar = (props) => {
  return(
    <View style={{ flexDirection:'row'}}> 
      <Button title="Home" />
      <Button title="User"/>
    </View>
  )
}


const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
        // tabBar={ props => <CustomTabBar {...props}/>}
        screenOptions={({route})=>({
          tabBarIcon: ({focused,color,size}) => {

            if(route.name === 'Home'){
              return focused ?
                <Image source={Logo} style={{width:50,height:50}}/>
              :
                <Image source={Logo} style={{width:50,height:50}}/>
            }

            return null
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'green',
          tabBarActiveBackgroundColor: "blue",
          tabBarLabelStyle: {
            fontSize: 20
          },
          tabBarStyle: [
            {
              display: "flex"
            },
            null
          ]

        })}
        
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen 
          name="Users" 
          component={Users}
          options={{
            tabBarLabel:'dog'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;