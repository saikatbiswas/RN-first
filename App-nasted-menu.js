import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import CustomDrawer from './src/utils/customDrawer';
import { DrawerActions } from '@react-navigation/native';

import Home from './src/components/Home';
import Users from './src/components/Users';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = ({navigation})=>(
  <Stack.Navigator initialRouteName="Home" >
    <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{
        // headerTitle: props => <Text>Home Page</Text>,
        headerLeft: (props) => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <View>
              {/* <Icon name="menu" size={24} color="#000" /> */}
              <Text>Menu</Text>
            </View>
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen name="Home_settings">
      { props => <Text>Home Settings</Text> }
    </Stack.Screen>
    <Stack.Screen name="Home_posts">
      { props => <Text>Home Posts</Text> }
    </Stack.Screen>
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();

const UserTab = ()=>(
  <Tab.Navigator>
    <Tab.Screen name="Users" component={Users} />
    <Tab.Screen name="User_settings">
      { props => <Text>User Settings</Text> }
    </Tab.Screen>
    <Tab.Screen name="User_Profile">
      { props => <Text>User Profile</Text> }
    </Tab.Screen>
  </Tab.Navigator>
)

const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="UserTab" component={UserTab} />
        <Drawer.Screen name="Posts">
          { props => <Text>Post Route</Text> }
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;