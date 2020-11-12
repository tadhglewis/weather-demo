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
  flex: 1;
  align-items: center;
  padding: 32px;
  background-color: ${primary};
  border-bottom-start-radius: 130px;
  border-bottom-end-radius: 130px;
`;

const LightsOut = styled(Icon)``;

const LightsOutButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  padding: 32px;
`;

export default ({ location }: { location?: string }) => {
  const { data, loading } = useDashboard({ location });
  const { theme, setTheme } = useApp();

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
            ]}
          />
        </>
      ) : (
        <ActivityIndicator size="large" color={`${textPrimary}`} />
      )}
      <LightsOutButton
        onPress={() => setTheme?.(theme === "light" ? "dark" : "light")}
      >
        <LightsOut
          size={32}
          icon={"lightbulb"}
          type={theme === "light" ? "r" : "s"}
        />
      </LightsOutButton>
    </Box>
  );
};
