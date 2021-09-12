import React, {useState } from 'react';
import { View, Text, Button, StyleSheet, Image, PermissionsAndroid, Platform  } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Contacts from 'react-native-contacts';


const App = () =>{
  const [avatar, setAvatar] = useState(null);
  const [contacts, setContacts] = useState([]);

  const options = {
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

  const requestContactPermission = async () => {
    try {
      if(Platform.OS === 'ios'){
        return true;
      }else{
        // Request single permission
        // const granted = await PermissionsAndroid.request(
        //   PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        //   {
        //     title: 'Contacts',
        //     message: 'This app would like to view your contacts.',
        //     buttonNeutral: "Ask Me Later",
        //     buttonNegative: "Cancel",
        //     buttonPositive: "OK"
        //   }
        // );
        // Request multiple permission
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          ],
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );

        return granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED
      }
      
    } catch (err) {
      console.warn(err);
    }
  };

  const getContacts = () => {
    requestContactPermission().then(getPwrmission => {
      if(getPwrmission){
        Contacts.getAll().then(contacts =>{
          // console.log(contacts);
          setContacts(contacts);
        }).catch(err=> console.log('err',err))
      }
    })
  }

  const addContacts = () =>{
    requestContactPermission().then(getPwrmission => {
      if(getPwrmission){
        const newContact = {
          phoneNumbers: [{
            label: "mobile",
            number: "9883342340",
          }],
          givenName: "Rio",
          familyName: "BIswas ",
          
        }

        Contacts.addContact(newContact).then( () =>{
          getContacts()
        }).catch(err=> console.log('err',err))
      }
    })
  }


  return(
    <View>
      <View>
        <Text>Hello</Text>
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

          <Button
            title="Get Contacts"
            onPress={()=>getContacts()}
          />
          <Button
            title="Add Contacts"
            color="pink"
            onPress={()=>addContacts()}
          />

          {contacts.map(item=>(
            <View 
              key={item.recordID}
              style={styles.contactBox}
            >
              <Text>Name:{item.displayName}</Text>
              <Text>Phone:{item.phoneNumbers[0]?item.phoneNumbers[0].number:null}</Text>
            </View>
          ))}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  avatar:{
    width:'100%',
    height:350
  },
  contactBox:{
    padding:10,
    borderBottomColor:'#aaa',
    borderBottomWidth:1
  }

});

export default App;