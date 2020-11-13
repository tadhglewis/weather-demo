import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { useQuery } from "react-query";
import config from "../../../config";
import useUser from "../../hooks/useUser";
import Weather from "../Weather";

export default ({ location }: { location?: string }) => {
  const { setOptions } = useNavigation<StackNavigationProp<AppNav>>();
  const user = useUser();
  const queryLocation = location
    ? location
    : `${user?.latitude},${user?.longitude}`;

  const { isLoading, error, data, refetch } = useQuery<Weather>(
    "currentLocationData",
    () =>
      fetch(
        `http://api.weatherstack.com/current?access_key=${config.apiKey}&units=m&query=${queryLocation}`
      ).then((res) => res.json()),
    {
      onSuccess: (data) => {
        setOptions({ title: data.location.name });
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [location]);

  return {
    loading: isLoading,
    data: data,
    refetch,
  };
};
