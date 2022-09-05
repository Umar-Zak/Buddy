import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet,TouchableWithoutFeedback,View,Image } from 'react-native';
import screensNames from '../Navigation/screens-names';
import colors from '../utils/colors';

const Tab = ({type}) => {
    const navigation = useNavigation()
    return ( 
       <>
   { type ==="refresh" && <TouchableWithoutFeedback onPress={()=> navigation.navigate(screensNames.HOME)}>
    <View style={[styles.tab,]} >
        <Image source={require(`../assets/refresh.png`)}/>
        </View>
    </TouchableWithoutFeedback>
    }
     { type ==="menu" && <TouchableWithoutFeedback onPress={()=>navigation.navigate(screensNames.MENU)}>
    <View style={[styles.tab,styles.menu]} >
        <Image source={require(`../assets/menu.png`)}/>
        </View>
    </TouchableWithoutFeedback>
    }
     { type ==="user" && <TouchableWithoutFeedback onPress={()=>navigation.navigate(screensNames.USER)}>
    <View style={[styles.tab,styles.user]} >
        <Image source={require(`../assets/user.png`)}/>
        </View>
    </TouchableWithoutFeedback>
    }
    </>
     );
}
 
const styles = StyleSheet.create({
    tab:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:colors.fair_light,
        justifyContent:"center",
        alignItems:"center",
       marginTop:15,
       marginBottom:10
    },
    menu:{
        backgroundColor:colors.accent_2
    },
    user:{
        backgroundColor:colors.fair_light
    }
})
export default Tab;