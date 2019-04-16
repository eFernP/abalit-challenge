import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class ButtonComponent extends Component {
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
        <TouchableOpacity
          style={styles.button}>

          <Text style={styles.textButton}>{this.props.title}</Text>

        </TouchableOpacity>
      </View>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    margin: 20,
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    
  },

  textButton:{
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#0a9396',
    fontWeight: 'bold'
  }


});