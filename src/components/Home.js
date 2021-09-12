import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Button, PermissionsAndroid  } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Contacts from 'react-native-contacts';



// import Logo from '../assets/img/shop-sopra.png'

const Home = (props) =>{
  const [avatar, setAvatar] = useState(null);
  

  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    includeBase64:true,
  };

  const getAvarar = ()=>{
    launchImageLibrary(options, response =>{
      console.log(response)
      if(response.didCancel){
        console.log(response.didCancel)
      } else if( response.errorCode){
        console.log(response.errorCode)
      } else{
        setAvatar(response.assets[0].uri);
      }
      
      
    });
  }


  useEffect(()=>{
    PermissionsAndroid.request(
       PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
       {
         'title': 'Contacts',
         'message': 'This app would like to view your contacts.',
         'buttonPositive': 'Please accept bare mortal'
       }
     )
     .then(()=>{
      //  Contacts.getAll().then( contacts =>{
      //    console.log(contacts)
      //  }).catch(err=> console.log(err))
       
     })
   },[])

// console.log(launchCamera)
  return(
      <View>
        {avatar?
        <Image 
          source={{uri:avatar}}
          style={styles.avatar}
        />
        :null}

        <Button
          title="Add Avatar"
          onPress={getAvarar}
        />

        {/* <View>
        < ActivityIndicator />

        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        </View>
        <Text>Hello sgfdfgfdg</Text>
        <Button
            title="Go to users"
            onPress={()=> props.navigation.navigate('User',{
                id:23
            }) }
        /> */}

        <Button
            title="Go to Home Settings"
            onPress={()=> props.navigation.navigate('Home_settings') }
        />
        <Button
            title="Go to Home Settings"
            onPress={()=> props.navigation.navigate('Home_posts') }
        />
      </View>
  )
}

const styles = StyleSheet.create({
  logo:{
    width:'70%'
  },
  avatar:{
    width:'100%',
    height:350
  }
});

export default Home;