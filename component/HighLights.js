import React from 'react';
import { FlatList,View} from 'react-native';
import Card from './Card';
import HeaderText from './HeaderText';
const HighLights = ({data}) => {
    return ( 
        <>
         <HeaderText text="Buddy, Today’s Highlights"/>
        <View>
        <FlatList 
         horizontal={true}
         data={data}
         renderItem={({item})=><Card/>}
         keyExtractor={item=> item}
         ItemSeparatorComponent={()=><View  style={{width:30}} />}
          />
        </View>
        </>
     );
}
 
 
export default HighLights;
