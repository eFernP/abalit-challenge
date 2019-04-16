import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Post from '../components/Post';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Post
        userName = "Bruce Miller" 
        user = "@bmiller"
        time = "Hace una hora"
        />
        <Navbar sytle={styles.navbar} />
      </View >
    );
  }

}


const styles = StyleSheet.create({

  navbar: {
    position: 'absolute',
    bottom: 0,
  }


});

AppRegistry.registerComponent('Login', () => Login);