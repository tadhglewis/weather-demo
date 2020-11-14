import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ThemeProvider } from "styled-components";
import home from "./home";
import useApp from "./useApp";
import AppContext from "./context/AppContext";
import { Root } from "native-base";

const { Navigator, Screen } = createStackNavigator<AppNav>();

export default () => {
  const { location, setTheme, theme, locate, setLocation } = useApp();

  return (
    <NavigationContainer>
      <AppContext.Provider
        value={{
          setTheme,
          theme,
          locate,
          location,
          setLocation,
        }}
      >
        <ThemeProvider theme={{ theme }}>
          <Root>
            <Navigator initialRouteName="home">
              <Screen
                name="home"
                component={home}
                options={{ title: "Home" }}
              />
            </Navigator>
          </Root>
        </ThemeProvider>
      </AppContext.Provider>
    </NavigationContainer>
  );
};
