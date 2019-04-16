import React, { Component } from 'react';
import {View, Image, TextInput, Button, StyleSheet} from 'react-native';

export default class InputComponent extends Component {
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
        <Image source={this.props.icon} style={styles.image}/>
        <TextInput style={styles.input} placeholder={this.props.placeholder}
        placeholderTextColor="white"
         
        />
      </View>
    );
  }

}


const styles = StyleSheet.create({

  container:{
    backgroundColor: '#0a9396',
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row'
  },

  input:{
    color: 'white',
    fontSize: 18,
  },

  image:{
    marginLeft: 10,
    marginRight: 10,
    width: 5,
    height: 5,
    padding: 25,
  }



});
