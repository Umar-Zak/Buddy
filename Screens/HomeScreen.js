import React, { useEffect, useState } from 'react';
import { Image,StyleSheet,ScrollView ,View} from 'react-native';
import {requestPermissions,beginTask} from "../tasks/LocationTask"
import {getLocations} from "../storage/store"
import HighLights from '../component/HighLights';
import MostVisited from '../component/MostVisited';
import Screen from '../component/Screen';
import CurrentLocation from '../component/CurrentLocation';
const HomeScreen = () => {
    const data = [1,2,3,4]
    const [locations,setLocations] = useState([])
   
    useEffect(()=>{
        beginTask()
        requestPermissions()
        getLocations(setLocations)
    },[])

    

    return (  
        <Screen>
            <CurrentLocation style={styles.map}/>
           <View style={styles.content}>
          <ScrollView style={styles.scroll}>
          <HighLights data={data}/>
          <MostVisited data={data}/>
          </ScrollView>
           </View>
        </Screen>
    );
}
 
const styles = StyleSheet.create({
    content:{
        paddingHorizontal:20
    },
    map:{
        marginBottom:40
    },
   
    scroll:{
        height:"55%"
    }
})
export default HomeScreen;