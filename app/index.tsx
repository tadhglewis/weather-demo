import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import { ThemeProvider } from "styled-components";
import home from "./home";
import useApp from "./useApp";
import UserContext from "./context/UserContext";

const { Navigator, Screen } = createStackNavigator();

export default () => {
  const { location } = useApp();

  return (
    <NavigationContainer>
      <UserContext.Provider value={location}>
        <ThemeProvider theme={{ theme: "dark" }}>
          <Navigator initialRouteName="home">
            <Screen name="home" component={home} options={{ title: "Home" }} />
          </Navigator>
        </ThemeProvider>
      </UserContext.Provider>
    </NavigationContainer>
  );
};
