import React from 'react';
import { Dimensions,StyleSheet } from 'react-native';
import CurrentLocation from '../component/CurrentLocation';

const ViewLocationScreen = ({route:{params}}) => {
    console.log(params)
    return ( 
        <CurrentLocation style={styles.map}/>
     );
}

const styles = StyleSheet.create({
    map:{
        height:Dimensions.get("window").height
    }
})
 
export default ViewLocationScreen;
