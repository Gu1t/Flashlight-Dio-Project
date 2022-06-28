import React, {useEffect, useState} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from "react-native-torch";
import RNshake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = ()=> setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
    // liga Lanterna
    Torch.switchState(toggle)
  }, [toggle]);

  useEffect(()=>{
    const subscription = RNshake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();
  },[]);

  return (
    <View style={toggle ? style.containerlight : style.container} >
      <TouchableOpacity 
        onPress={handleChangeToggle}>
      <Image 
        style={ toggle ? style.lightingOn : style.lightingOff}
        source={
          toggle 
          ? require('./assets/Icons/eco-light.png')
          : require('./assets/Icons/eco-light-off.png')
          
        }
        />
    <Image 
      style={style.diologo}
      source={
        toggle 
        ? require('./assets/Icons/logo-dio.png')
        : require('./assets/Icons/logo-dio-white.png')
        
      }
      />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerlight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  diologo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});