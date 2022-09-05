import { View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';
import time from '../utils/time';

const Card = ({data={latitude:2390,longitude:-1290,time:new Date(),finished:new Date()},style,onPress}) => {
   
    return ( 
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.card,style]}>
       <View style={styles.header}>
           <Image style={styles.location} source={require("../assets/location.png")} />
           <View>
               <Text style={styles.heading}>{time.format(data.time)}</Text>
               <Text style={styles.tagline}>30 minutes done</Text>
           </View>
       </View>
       <View style={styles.coordinate}>
        <Text style={styles.latitude}>Latitude</Text>
        <Text style={styles.value}>{data.latitude}</Text>
       </View>
       <View style={styles.coordinate}>
        <Text style={styles.latitude}>Longitude</Text>
        <Text style={styles.value}>{data.longitude}</Text>
       </View>
    </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    card:{
        width:"100%",
        paddingTop:15,
        backgroundColor:colors.accent_2,
        borderRadius:7,
        paddingHorizontal:14,
        paddingBottom:5,
    },
    coordinate:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:10
    }
    ,
    header:{
        flexDirection:"row",
        marginBottom:20
    }

    ,
heading:{
    fontWeight:"400",
    fontSize:13,
    color:colors.light,
    marginBottom:4
}
,
latitude:{
    fontWeight:"500",
    fontSize:12,
    color:"white"
    
}
    ,
    location:{
        width:30,
        height:30,
        marginRight:6
    },
    tagline:{
        fontWeight:"500",
        fontSize:11,
        color:"white"
    },
    value:{
        fontWeight:"500",
    fontSize:11,
    color:colors.primary
    }
})
export default Card;
