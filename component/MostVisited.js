import React from 'react';
import { FlatList,View,StyleSheet} from 'react-native';
import colors from '../utils/colors';
import Card from './Card';
import HeaderText from './HeaderText';
const MostVisited = ({data}) => {
    return ( 
        <View style={styles.container}>
         <HeaderText text="Your most stayed places"/>
        <View>
        <FlatList 
         horizontal={true}
         data={data}
         renderItem={({item})=><Card style={styles.card}/>}
         keyExtractor={item=> item}
         ItemSeparatorComponent={()=><View  style={{width:30}} />}
          />
        </View>
        </View>
     );
}
 
const styles = StyleSheet.create({

    card:{
        backgroundColor:colors.secondary
    },
    container:{
        marginTop:40
    }
})
 
export default MostVisited;
