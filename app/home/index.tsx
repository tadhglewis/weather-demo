import React from "react";
import styled from "styled-components/native";
import { StackScreenProps } from "@react-navigation/stack";
import Dashboard from "./dashboard";
import { background } from "../ui/theme";
import useUser from "../hooks/useUser";

const Box = styled.View`
  flex: 1;
  background-color: ${background};
`;

const Search = styled.View`
  flex: 1;
`;

export default ({ navigation, route }: StackScreenProps<AppNav, "home">) => {
  const user = useUser();

  return (
    <Box>
      {user ? <Dashboard location={route.params?.location} /> : null}
      <Search></Search>
    </Box>
  );
};
