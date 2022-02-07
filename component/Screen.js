import React from 'react';
import { View,StyleSheet } from 'react-native';
import colors from '../utils/colors';

const Screen = ({children}) => {
    return ( 
    <View style={styles.screen}>
        {children}
     </View> 
    );
}
 
const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:colors.dark
    }
})
export default Screen;