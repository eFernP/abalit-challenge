import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default class PostOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View >
          <Image source={require('../assets/icons/ic_default_user.png')} style={styles.image} />
          <Text>{this.props.userName}</Text>
          <Text>{this.props.user}</Text>
          <Text>{this.props.time}</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({

  image:{
    width: 50,
    height: 50
  }
});