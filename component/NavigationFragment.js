import React from 'react';
import { View,StyleSheet,Image, TouchableWithoutFeedback } from 'react-native';
import HomeNavigation from '../Navigation/HomeNavigation';
import HomeScreen from '../Screens/HomeScreen';
import colors from '../utils/colors';

const NavigationFragment = () => {
    return ( 
        <View style={styles.container}>
            <HomeNavigation/>
            <View style={styles.tabbar}>
               <TouchableWithoutFeedback onPress={()=>console.log("Pressed")}>
               <View style={[styles.tab]} >
                <Image source={require("../assets/refresh.png")}/>
                </View>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback onPress={()=>console.log("Pressed")}>
               <View style={[styles.tab,styles.menu]} >
                <Image source={require("../assets/menu.png")}/>
                </View>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback onPress={()=>console.log("Pressed")}>
               <View style={[styles.tab,styles.user]} >
                <Image source={require("../assets/user.png")}/>
                </View>
               </TouchableWithoutFeedback>
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    tab:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:colors.fair_light,
        justifyContent:"center",
        alignItems:"center"
    }
    ,
    tabbar:{
        position:"absolute",
        bottom:0,
        width:"100%",
        height:90,
        backgroundColor:colors.dark,
        borderTopWidth:0.5,
        borderTopColor:"#fff",
        flexDirection:"row",
        paddingHorizontal:40,
        paddingBottom:20,
        justifyContent:"space-between",
        paddingTop:12,
        opacity:0.9
    },
    menu:{
        backgroundColor:colors.accent_2
    },
    user:{
        backgroundColor:colors.fair_light
    }
    
})
export default NavigationFragment;
