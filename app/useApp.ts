import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default () => {
  const [location, setLocation] = useState<
    | {
        longitude: number;
        latitude: number;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation({ longitude: coords.longitude, latitude: coords.latitude });
    })();
  }, []);

  return { location };
};
