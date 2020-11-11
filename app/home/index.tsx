import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { primary } from "../ui/theme";
import UserContext from "../context/UserContext";
import { StackScreenProps } from "@react-navigation/stack";
import Dashboard from "./dashboard";

const Box = styled.View`
  background-color: ${primary};
  flex: 1;
`;

export default ({ navigation }: StackScreenProps<AppNav, "home">) => {
  const user = useContext(UserContext);

  return (
    <Box>
      {user ? (
        <Dashboard />
      ) : (
        <Text>Permission to access location was denied</Text>
      )}
    </Box>
  );
};
