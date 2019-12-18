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
import IconProvider from '../../components/IconProvider';

export default class RegisterActivity extends React.Component {
  _onPressSignUp = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewHeader}>
          <ImageBackground
            style={styles.imageHeader}
            source={require('../../../assets/image/background.png')}>
            <IconProvider
              onPress={this._onPressSignUp}
              style={styles.goback}
              name={'arrow-left'}
              size={30}
              color="#FFF"
            />
            <View style={styles.viewTxt}>
              <Text style={styles.txtWelcome}>Hello,</Text>
              <Text style={styles.txtTileLogin}>Sign Up</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <TextInput
            placeholder="User Name"
            caption="User Name"
            containerStyle={styles.input}
          />
          <TextInput
            placeholder="Emails"
            caption="Email"
            style={styles.input}
          />
          <TextInput
            placeholder="Emails"
            caption="Password"
            style={styles.input}
          />
          <Buttom
            style={styles.btnLogin}
            large
            secondary
            rounded
            caption="Sign Up"
          />
        </View>
        <View style={styles.viewCreate}>
          <Text style={styles.txtCreat}>Already have account?</Text>
          <Text onPress={this._onPressSignUp} style={styles.txtSig}>
            Sign In.
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
    marginTop: 10,
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
  input: {},
  viewCreate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 100,
  },
  txtSig: {
    color: '#5A81F7',
  },
  txtCreat: {
    marginRight: 10,
  },
  goback: {
    marginLeft: 20,
    marginTop: -30,
    backgroundColor: '#B8B8B8',
    width: 32,
    borderRadius: 20,
  },
});
