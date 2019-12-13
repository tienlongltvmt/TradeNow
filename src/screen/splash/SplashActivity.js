import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class SplashActivity extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageSplash}
          source={{
            uri:
              'https://i.pinimg.com/564x/d9/fd/2c/d9fd2c06e80a8a83ac1e291db77c7506.jpg',
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSplash: {
    flex: 1,
  },
});
