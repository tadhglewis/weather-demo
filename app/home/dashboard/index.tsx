import React, { useContext } from "react";
import styled from "styled-components/native";
import { primary, textPrimary } from "../../ui/theme";
import formatters from "../../formatters";
import useDashboard from "./useDashboard";
import { Toast } from "native-base";
import { WeatherCodeObjs } from "../../constants";
import ui from "../../ui";
import { ActivityIndicator } from "react-native";
import Details from "./details";
import useApp from "../../hooks/useApp";

const { icon } = ui;
const { unit } = formatters;

const Icon = styled(icon)`
  color: ${textPrimary};
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
  width: 100%;
  flex: 1;
  align-items: center;
  padding: 32px;
  background-color: ${primary};
  border-bottom-start-radius: 130px;
  border-bottom-end-radius: 130px;
  shadow-color: ${primary};
  shadow-offset: 0 1px;
  shadow-opacity: 0.22;
  shadow-radius: 2.22px;
  elevation: 3;
`;

export default ({ location }: { location?: string }) => {
  const { data, loading } = useDashboard({ location });

  return (
    <Box>
      {!loading ? (
        <>
          <Icon
            size={64}
            icon={
              WeatherCodeObjs.find(
                (weatherCodeObj) =>
                  weatherCodeObj.code === data?.current.weather_code
              )?.icon || "bug"
            }
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
          <Details
            items={[
              { label: "UV Index", value: data?.current.uv_index.toString() },
              {
                label: "Feels Like",
                value: data?.current.feelslike.toString(),
              },
            ]}
          />
        </>
      ) : (
        <ActivityIndicator size="large" color={`${textPrimary}`} />
      )}
    </Box>
  );
};
