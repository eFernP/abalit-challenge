import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import PostHeader from './PostHeader';


export default class Post extends Component {
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
        <PostHeader 
        userName={this.props.userName}
        user={this.props.user}
        time={this.props.time}
        />
        <Image source={require('../assets/images/cat1.jpg')} style={styles.image} />
      </View>
    );
  }

}


const styles = StyleSheet.create({

  image:{
    height: 250,
    width: '100%'
  }
});