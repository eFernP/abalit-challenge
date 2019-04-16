import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default class PostHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/icons/ic_default_user.png')} style={styles.image} />
        <View style={styles.userText}>
          <Text>{this.props.userName}</Text>
          <Text>{this.props.user}</Text>
        </View>
        <Text>{this.props.time}</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },

  userText: {
    marginLeft: 20,
    marginRight: 50
  },


  image: {
    width: 50,
    height: 50
  }
});