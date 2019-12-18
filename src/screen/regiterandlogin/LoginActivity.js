import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  // CheckBox,
  // TextInput,
} from 'react-native';

import {TextInput, Buttom} from '../../components';
import {CheckBox} from 'react-native-elements';
export default class LoginActivity extends React.Component {
  state = {
    text: '',
    checked: false,
  };
  _onPressSignUp = () => {
    this.props.navigation.navigate('Register');
  };
  _onPressLogin = () => {
    this.props.navigation.navigate('Profile');
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
          <TextInput
            placeholder="Email"
            caption="Email"
            containerStyle={styles.input}
          />
          <TextInput
            placeholder="Emails"
            caption="Password"
            style={styles.input}
          />
          <CheckBox
            containerStyle={styles.checkboxs}
            title="Remember me"
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          />
          <Buttom
            style={styles.btnLogin}
            large
            secondary
            rounded
            caption="Log In"
            onPress={this._onPressLogin}
          />
        </View>
        <View style={styles.viewCreate}>
          <Text style={styles.txtCreat}>Don't have an account ?</Text>
          <Text onPress={this._onPressSignUp} style={styles.txtSig}>
            Sign up.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    height: 189,
    width: '90%',
    flex: 0.2,
  },
  imageHeader: {
    height: '100%',
    width: '89%',
    marginTop: -10,
    marginLeft: -10,
    justifyContent: 'center',
  },
  body: {
    marginTop: 30,
    justifyContent: 'center',
    flex: 0.7,
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
  },
  btnLogin: {
    width: 200,
    marginTop: 20,
    alignSelf: 'center',
    elevation: 2,
  },
  checkboxs: {
    width: 150,
    backgroundColor: 'rgba(70, 0, 0, 0) ',
    marginLeft: 20,
  },
  input: {
    alignItems: 'center',
  },
  viewCreate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  txtSig: {
    color: '#5A81F7',
  },
  txtCreat: {
    marginRight: 10,
  },
});
