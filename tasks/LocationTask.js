import * as Location from "expo-location"
import * as TaskManager from "expo-task-manager";
import {saveLocations} from "../storage/store"

export const LOCATION_TASK= 'background-location-task';

export const requestPermissions = async () => {
    try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        const {status:status_1} = await Location.requestBackgroundPermissionsAsync()
       
        
        if (status === 'granted' && status_1 === "granted") {
        await Location.startLocationUpdatesAsync(LOCATION_TASK, {
            accuracy: Location.Accuracy.Balanced,
          });
     
    }
    } catch (error) {
        console.log(error)
    }
  };

  export const beginTask = ()=>{
    TaskManager.defineTask(LOCATION_TASK, ({ data, error }) => {
        if (error) {
          console.log(error)
        }
        if (data) {
          const { locations } = data;
           const transformedLocations = locations.map(({coords}) => (
              {...coords,time:new Date() }
           ) )
           const index = transformedLocations.length - 1
           saveLocations(transformedLocations[index])
        }
      });
  }