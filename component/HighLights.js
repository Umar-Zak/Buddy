import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList,View} from 'react-native';
import Card from './Card';
import HeaderText from './HeaderText';
import screensNames from '../Navigation/screens-names';
const HighLights = ({data}) => {
 
 const navigation = useNavigation()
    return ( 
        <>
         <HeaderText text="Buddy, Today’s Highlights"/>
        <View>
        <FlatList 
         horizontal={true}
         data={data}
         renderItem={({item})=><Card data={item} onPress={()=>navigation.navigate(screensNames.VIEW_LOCATION,item)}/>}
         keyExtractor={item=> item.time}
         ItemSeparatorComponent={()=><View  style={{width:30}} />}
          />
        </View>
        </>
     );
}
 
 
export default HighLights;
