import * as Location from "expo-location"


export const LOCATION_TASK= 'background-location-task';

export const requestPermissions = async () => {
    try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        const {status_1} = await Location.requestBackgroundPermissionsAsync()
    
        if (status === 'granted' || status_1 ==="granted") {
        await Location.startLocationUpdatesAsync(LOCATION_TASK, {
            accuracy: Location.Accuracy.Balanced,
          });
     
    }
    } catch (error) {
        console.log(error)
    }
  };