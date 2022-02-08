import AsyncStorage from '@react-native-async-storage/async-storage';
const LOCATION_KEY = "@locations"



export const saveLocations = async location =>{
 let locations = await AsyncStorage.getItem(LOCATION_KEY)
 if (locations){
    locations = JSON.parse(locations)
    locations[locations.length - 1].finished = new Date()
    locations = [...locations,location]
    await AsyncStorage.setItem(LOCATION_KEY,JSON.stringify(locations))
    return
 }

 await AsyncStorage.setItem(LOCATION_KEY,JSON.stringify([location]))

}

export const getLocations = async updateState=>{
    const locations = await AsyncStorage.getItem(LOCATION_KEY)
    if (!locations) return
    
   updateState(locations)
}