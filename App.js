import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationFragment from './component/NavigationFragment';
import CurrentLocation from './component/CurrentLocation';
 

export default function App() {
  return (
   <NavigationContainer>
      <NavigationFragment/>
   </NavigationContainer>
  // <CurrentLocation/>
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
