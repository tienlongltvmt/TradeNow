import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ViewComponent extends React.Component<{colors?: string, start?:string}> {
    render() {
        return(
            <LinearGradient style={styles.viewIconMenu} {...this.props}/>
        )
    }
}
export default ViewComponent;

const styles = StyleSheet.create({
    
})