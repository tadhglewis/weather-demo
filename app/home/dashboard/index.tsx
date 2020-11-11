import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { primary, textPrimary } from "../../ui/theme";
import formatters from "../../formatters";
import useDashboard from "./useDashboard";
import { Toast } from "native-base";
import { WeatherCodeObjs } from "../../constants";

const { unit } = formatters;

const Icon = styled.Image`
  width: 500px;
  height: 100px;
`;

const WeatherDescription = styled.Text`
  color: ${textPrimary};
  font-size: 20px;
  font-weight: 700;
`;

const Location = styled.Text`
  font-size: 16px;
  color: ${textPrimary};
`;

const Temperature = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: ${textPrimary};
`;

const Box = styled.View`
  background-color: ${primary};
  flex: 1;
  align-items: center;
`;

export default () => {
  const { data, loading } = useDashboard();

  return (
    <Box>
      <Icon
        source={{
          uri: `https://source.unsplash.com/1600x900/?${data?.current.weather_descriptions[0]}`,
        }}
      />
      <WeatherDescription
        onLongPress={() =>
          Toast.show({
            text:
              WeatherCodeObjs.find(
                (weatherCodeObj) =>
                  weatherCodeObj.code === data?.current.weather_code
              )?.condition || "",
          })
        }
      >
        {data?.current.weather_descriptions[0]}
      </WeatherDescription>
      <Location>
        {data?.location.name}, {data?.location.region}
      </Location>
      <Temperature>
        {data?.current.temperature}°{unit(data?.request.unit)}
      </Temperature>
      <Text>Hello</Text>
    </Box>
  );
};
