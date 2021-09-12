import React from 'react';
import { View, Text, Button } from 'react-native';
import { 
    DrawerContentScrollView,
    DrawerItemList
 } from '@react-navigation/drawer';


const CustomDrawer = (props)=>{
    return(
        <DrawerContentScrollView {...props}>
            <Button
                title="Home"
                onPress={()=> props.navigation.navigate('Home')}
            />
            <View>
                <Text>User Section</Text>
                <View>
                    <Button
                        title="Users"
                        onPress={()=> props.navigation.navigate('Users')}
                    />
                    <Button
                        title="Users"
                        onPress={()=> props.navigation.navigate('Users')}
                    />
                </View>
            </View>
            {/* <DrawerItemList {...props} /> */}
        </DrawerContentScrollView>
    )
}

export default CustomDrawer;