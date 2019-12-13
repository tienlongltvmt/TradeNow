import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  // TextInput,
} from 'react-native';

import {TextInput} from '../../components';
export default class LoginActivity extends React.Component {
  state = {
    text: '',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewHeader}>
          <ImageBackground
            style={styles.imageHeader}
            source={require('../../../assets/image/background.png')}>
            <View style={styles.viewTxt}>
              <Text style={styles.txtWelcome}>Welcome Back,</Text>
              <Text style={styles.txtTileLogin}>Log In!</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <TextInput placeholder="Email" />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    height: 189,
    width: '90%',
  },
  imageHeader: {
    height: '100%',
    width: '89%',
    marginTop: -10,
    marginLeft: -10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'center',
  },
  body: {
    // height: '70%',
    marginTop: 30,
  },
  txtWelcome: {
    color: 'white',
    fontSize: 20,
  },
  txtTileLogin: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  viewTxt: {
    alignSelf: 'flex-start',
    marginHorizontal: '10%',
    marginTop: 30,
  },
});
