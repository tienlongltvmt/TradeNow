import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class IconProvider extends React.Component<{ name?: string, size?: number,color?: string,[key: string]: any,}> {
  render() {
    return (
      <Icon {...this.props} />
    );
  }
}

export default IconProvider;
