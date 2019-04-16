import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.image} />
        </View>

        <InputComponent
          icon={require('../assets/icons/ic_mail.png')}
          placeholder="email"
        />
        <InputComponent
          icon={require('../assets/icons/user.png')}
          placeholder="email"
        />
        <InputComponent
          icon={require('../assets/icons/lock2.png')}
          placeholder="contraseña"
        />
        <ButtonComponent
          title="Signup"
        />
        <Text style={styles.textSingUp}>¿Ya tienes cuenta? ¡Entra aquí!</Text>
        <Text style={styles.textLegal}>Aviso legal</Text>
      </View >
    );
  }

}


const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },

  container: {
    backgroundColor: '#33cbce',
    height: '100%',

  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,

  },

  textSingUp: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 18
  },

  textLegal: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }
});

AppRegistry.registerComponent('Signup', () => Signup);