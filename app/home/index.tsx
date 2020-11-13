import React, { useState } from "react";
import styled from "styled-components/native";
import { StackScreenProps } from "@react-navigation/stack";
import Dashboard from "./dashboard";
import { background, secondary } from "../ui/theme";
import useUser from "../hooks/useUser";
import ui from "../ui";
import useApp from "../hooks/useApp";
import { useWindowDimensions } from "react-native";
import Search from "./search";

const { icon } = ui;

const Box = styled.View`
  flex: 1;
  background-color: ${background};
  align-items: center;
`;

const LightsOut = styled(icon)`
  color: ${secondary};
`;

const LightsOutButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  padding: 16px;
`;

export default ({ navigation, route }: StackScreenProps<AppNav, "home">) => {
  const { height } = useWindowDimensions();
  const [location, setLocation] = useState<string | undefined>(
    route.params?.location
  );
  const user = useUser();
  const { theme, setTheme } = useApp();

  return (
    <Box style={{ height }}>
      {user ? <Dashboard location={location} /> : null}
      <Search setLocation={setLocation} />
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
    </Box>
  );
};
