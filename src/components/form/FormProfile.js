import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconProvider from '../IconProvider';

export default function FormProfile(props) {
  //   state = {
  //     isOpened: false,
  //   };
  const title = props.title && props.title.toUpperCase();
  return (
    <View style={styles.container}>
      <IconProvider
        style={styles.iconOne}
        name={'angle-right'}
        size={18}
        color={'#444'}
      />
      <Text style={styles.txtProfile}>{title}</Text>
      <TouchableOpacity style={styles.viewNext}>
        <View style={styles.viewIcon}>
          <Icon style={styles.iconNext} name="angle-right" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '24%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEEEEF',
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
    padding: 10,
    // backgroundColor: 'red',
  },
  iconOne: {
    width: '10%',
    // backgroundColor: 'green',
  },
  txtProfile: {
    marginLeft: 20,
    width: '70%',
    // backgroundColor: 'red',
  },

  viewNext: {
    width: '10%',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  viewIcon: {
    height: 25,
    width: 25,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#727C8E',
    marginLeft: 10,
  },
  iconNext: {
    marginTop: 1,
    marginLeft: 1,
  },
});
