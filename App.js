import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationFragment from './component/NavigationFragment';
import CurrentLocation from './component/CurrentLocation';
import AppNavigation from './Navigation/AppNavigation';
 

export default function App() {
  return (
   <NavigationContainer>
       <AppNavigation/>
   </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal:10
  },
});
