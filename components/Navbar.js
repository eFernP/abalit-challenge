import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import NavbarElement from './NavbarElement';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onPress() {
    console.log('Login')
  }

  render() {
    return (

      <View style={styles.container}>
        <NavbarElement
          icon={require('../assets/icons/ic_home_active.png')}
          text="Inicio" 
        />
        <NavbarElement
          icon={require('../assets/icons/ic_search.png')}
          text="Buscar" 
        />
        <NavbarElement
          icon={require('../assets/icons/ic_camera.png')}
          text="Publicar" 
        />
        <NavbarElement
          icon={require('../assets/icons/ic_notifications.png')}
          text="Notificaciones" 
        />
        <NavbarElement
          icon={require('../assets/icons/ic_user.png')}
          text="Perfil" 
        />
      </View>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    margin: 20,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
});