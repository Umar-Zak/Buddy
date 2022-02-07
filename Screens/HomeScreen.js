import React, { useEffect } from 'react';
import { Image,StyleSheet,Text,FlatList,ScrollView ,View} from 'react-native';
import * as TaskManager from "expo-task-manager";
import {LOCATION_TASK,requestPermissions} from "../tasks/LocationTask"
import HighLights from '../component/HighLights';
import MostVisited from '../component/MostVisited';
import Screen from '../component/Screen';
const HomeScreen = () => {
    const data = [1,2,3,4]
   
    TaskManager.defineTask(LOCATION_TASK, ({ data, error }) => {
        if (error) {
          console.log(error)
        }
        if (data) {
          const { locations } = data;
          console.log(data)
        }
      });
      requestPermissions()
    // useEffect(()=>{
       
    // },[])

    

    return (  
        <Screen>
            <Image style={styles.map} resizeMode='cover' source={require("../assets/maps.jpg")} />
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
        width:"100%",
        height:"45%",
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        marginBottom:40
    },
   
    scroll:{
        height:"55%"
    }
})
export default HomeScreen;