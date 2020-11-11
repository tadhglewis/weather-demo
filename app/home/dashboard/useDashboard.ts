import { useContext } from "react";
import { useQuery } from "react-query";
import config from "../../../config";
import UserContext from "../../context/UserContext";
import Weather from "../Weather";

export default () => {
  const user = useContext(UserContext);

  const { isLoading, error, data, refetch } = useQuery<Weather>(
    "currentLocationData",
    () =>
      fetch(
        `http://api.weatherstack.com/current?access_key=${config.apiKey}&units=m&query=${user?.latitude},${user?.longitude}`
      ).then((res) => res.json()),
    {}
  );

  return { loading: isLoading, data: data, refetch };
};
