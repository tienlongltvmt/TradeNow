import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ExChangeActivity extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> ExChangeActivity</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
