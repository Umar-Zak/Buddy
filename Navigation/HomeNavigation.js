import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import ViewLocationScreen from '../Screens/ViewLocationScreen';
import screensNames from './screens-names';
const Stack = createNativeStackNavigator()

const HomeNavigation = () => {
    return ( 
        <Stack.Navigator >
            <Stack.Screen options={{headerShown:false}}  name={screensNames.FEED} component={HomeScreen} />
            <Stack.Screen options={{headerShown:false}} name= {screensNames.VIEW_LOCATION} component={ViewLocationScreen}  />
        </Stack.Navigator>
     );
}
 
export default HomeNavigation;
