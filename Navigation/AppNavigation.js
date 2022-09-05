import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HistoryScreen from '../Screens/HistoryScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import HomeNavigation from './HomeNavigation';
import screensNames from './screens-names';
import Tabs from '../component/Tab';
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return ( 
        <Tab.Navigator>
            <Tab.Screen options={{headerShown:false,tabBarIcon:()=><Tabs type="refresh"/>  }}  name={screensNames.HOME} component={HomeNavigation} />
            <Tab.Screen options={{tabBarIcon:()=><Tabs type="menu"/>  }}  name={screensNames.MENU} component={HistoryScreen} />
            <Tab.Screen options={{tabBarIcon:()=><Tabs type="user"/>  }}  name={screensNames.USER} component={SettingsScreen} />
        </Tab.Navigator>
     );
}
 
export default AppNavigation;