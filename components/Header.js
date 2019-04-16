import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import NavbarElement from './NavbarElement';

export default class Header extends Component {
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
        <Text style={styles.text}
        >Inicio</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    backgroundColor: '#33cbce',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
  }
});