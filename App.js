import React, {useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Icon, Header,  Button, Overlay, Text } from 'react-native-elements'
import AnimationOne from './src/Animation/AnimationOne';
import AnimationTwo from './src/Animation/AnimationTwo';
import RNBootSplash from "react-native-bootsplash";



const App = () =>{
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    RNBootSplash.hide({ fade: true });

  }, []);

  // console.log(Platform)
  return(
    <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      {/* <AnimationOne /> */}

      <AnimationTwo />



      {/* <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>

      {Platform.OS === 'ios' ?
        <Icon name='rowing' />
        :
        <>
        <Text>Android</Text>
        <Icon
          name='g-translate'
          color='#00aced' />
        </>
      } */}
      
      
    </View>
  )
}


const styles = StyleSheet.create({
  overlay:{
    width:'80%',
    minHeight:300
  }
});

export default App;