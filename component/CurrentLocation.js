import React from 'react';
import MapView ,{Marker}from 'react-native-maps';

import { Dimensions ,StyleSheet, View} from 'react-native';
const regions = {
    latitude: 5.587015,
  longitude: -0.143351,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0922,
}
const CurrentLocation = ({style}) => {
    return (
 <MapView 
        style={[styles.map,style]}
        initialRegion={regions}
         > 
    <Marker
        coordinate={regions}
        />
        
 </MapView>
   );
}

const styles = StyleSheet.create({
    map:{
        width:Dimensions.get("window").width,
        height:"45%"
    }
})
 
export default CurrentLocation;