import React from "react";
import styled from "styled-components/native";
import { StackScreenProps } from "@react-navigation/stack";
import Dashboard from "./dashboard";
import { background, secondary } from "../ui/theme";
import ui from "../ui";
import useApp from "../hooks/useApp";
import Search from "./search";
import { View } from "native-base";

const { icon } = ui;

const Box = styled.ScrollView`
  flex: 1;
  background-color: ${background};
`;

const LightsOut = styled(icon)`
  color: ${secondary};
`;

const LightsOutButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  padding: 16px;
  margin: auto;
  align-self: center;
`;

const LocateButton = styled.TouchableOpacity`
  padding: 13px;
`;

const Locate = styled(icon)`
  color: black;
`;

export default ({ navigation, route }: StackScreenProps<AppNav, "home">) => {
  const { theme, setTheme, locate, location } = useApp();

  navigation.setOptions({
    headerRight: () => (
      <LocateButton
        onPress={() => {
          locate?.();
        }}
      >
        <Locate icon="map-marker" size={23} />
      </LocateButton>
    ),
  });

  return (
    <>
      <Box>
        <View style={{ alignItems: "center" }}>
          {location ? <Dashboard /> : null}
          <Search />
        </View>
      </Box>
      <LightsOutButton
        testID="lightsOut"
        onPress={() => setTheme?.(theme === "light" ? "dark" : "light")}
      >
        <LightsOut
          size={32}
          icon={"lightbulb"}
          type={theme === "light" ? "r" : "s"}
        />
      </LightsOutButton>
    </>
  );
};
