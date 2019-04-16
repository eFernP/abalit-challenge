import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class NavbarElement extends Component {
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

      <TouchableOpacity style={styles.container}>
        <Image source={this.props.icon} style={styles.image} />
        <Text style={{textAlign: 'center'}}>{this.props.text}</Text>
      </TouchableOpacity>

    );
  }

}


const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 50,
    height: 50,
  }


});