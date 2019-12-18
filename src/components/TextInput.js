import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
// import colors from '../styles';
export default function RNTextInput(props) {
  const caption = props.caption && props.caption.toUpperCase();
  return (
    <View style={styles.container}>
      <View style={styles.viewLable}>
        <View style={styles.viewOne} />
        <Text style={styles.txtLable}>{caption}</Text>
        <View style={styles.viewTwo} />
      </View>
      <View style={styles.viewInput}>
        <TextInput style={styles.textInput} placeholderTextColor="red" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '80%',
    marginHorizontal: 20,
    //backgroundColor: 'gray',
    justifyContent: 'center',
    marginTop: 40,
  },
  viewInput: {
    paddingHorizontal: 20,
    height: 35,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    //backgroundColor: 'red',
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#C4C0C0',
  },
  viewLable: {
    flexDirection: 'row',
    height: 5,
    justifyContent: 'center',
  },
  viewOne: {
    flex: 0.075,
    height: 20,
    //backgroundColor: 'red',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 20,
    borderLeftWidth: 1.5,
    borderTopWidth: 1.5,
    borderColor: '#C4C0C0',
  },
  viewTwo: {
    flex: 0.75,
    height: 20,
    //backgroundColor: 'red',
    alignSelf: 'flex-end',
    borderTopRightRadius: 20,
    borderRightWidth: 1.5,
    borderTopWidth: 1.5,
    marginTop: 10,
    borderColor: '#C4C0C0',
  },
  txtLable: {
    flex: 0.25,
    textAlign: 'center',
    marginTop: -25,
    height: 15,
    alignItems: 'center',
    fontSize: 10,
    fontWeight: '100',
  },
  textInput: {
    height: 40,
    //backgroundColor: 'red',
    marginTop: -10,
  },
});
