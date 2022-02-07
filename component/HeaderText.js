import React from 'react';
import { Text,StyleSheet } from 'react-native';
const HeaderText = ({style,text}) => {
    return ( 
        <Text style={[styles.header,style]}>{text}</Text>
     );
}
 
const styles = StyleSheet.create({
    header:{
        color:"white",
        fontSize:18,
        fontWeight:"normal",
        marginBottom:15
    }
})

export default HeaderText;
