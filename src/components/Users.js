import React from 'react';
import { View, Text, Button } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationContainer, DrawerActions } from '@react-navigation/native';


const Users = () =>{
  const navigation = useNavigation();
  // const route = useRoute()

  
  
  return(
      <View>
        <Text>User dfgfd</Text>
        {/* <Button
            title="Drawer"
            onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
        /> */}
      </View>
  )
}

// const styles = StyleSheet.create({

// });

export default Users;