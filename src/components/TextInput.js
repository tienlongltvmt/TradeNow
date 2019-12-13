import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
// import colors from '../styles';

export default class RNTextInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewLable}>
          <View style={styles.viewOne} />
          <Text style={styles.txtLable}>Email</Text>
          <View style={styles.viewTwo} />
        </View>
        <View style={styles.viewInput}>
          <TextInput placeholderTextColor="red" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '80%',
    marginHorizontal: 20,
    //backgroundColor: 'gray',
    justifyContent: 'center',
  },
  viewInput: {
    paddingHorizontal: 20,
    height: 40,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    //backgroundColor: 'red',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  viewLable: {
    flexDirection: 'row',
    height: 10,
    justifyContent: 'center',
  },
  viewOne: {
    flex: 0.075,
    height: 20,
    //backgroundColor: 'red',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 10,
    borderLeftWidth: 2,
    borderTopWidth: 2,
  },
  viewTwo: {
    flex: 0.75,
    height: 20,
    //backgroundColor: 'red',
    alignSelf: 'flex-end',
    borderTopRightRadius: 10,
    borderRightWidth: 2,
    borderTopWidth: 2,
    marginTop: 10,
  },
  txtLable: {
    flex: 0.175,
    textAlign: 'center',
    marginTop: -20,
    height: 20,
    alignItems: 'center',
  },
});
