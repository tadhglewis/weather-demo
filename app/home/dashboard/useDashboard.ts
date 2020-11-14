import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { Alert } from "react-native";
import { useQuery } from "react-query";
import config from "../../../config";
import useApp from "../../hooks/useApp";
import Weather from "../Weather";

export default () => {
  const { location, locate } = useApp();
  const { setOptions } = useNavigation<StackNavigationProp<AppNav>>();

  const { isLoading, error, data, refetch } = useQuery<Weather>(
    "currentLocationData",
    () =>
      fetch(
        `http://api.weatherstack.com/current?access_key=${config.apiKey}&units=m&query=${location}`
      ).then((res) => res.json()),
    {
      onSuccess: (data) => {
        if (!data.location) {
          Alert.alert("Location not found");
          locate?.();
          return;
        }
        setOptions({ title: data.location.name });
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [location]);

  return {
    loading: isLoading,
    data: !data?.current ? undefined : data,
    refetch,
    error,
  };
};
