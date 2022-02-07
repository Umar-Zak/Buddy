import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator()

const HomeNavigation = () => {
    return ( 
        <Stack.Navigator >
            <Stack.Screen options={{headerShown:false}}  name="Feed" component={HomeScreen} />
        </Stack.Navigator>
     );
}
 
export default HomeNavigation;
