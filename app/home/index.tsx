import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import config from "../../config";
import { primary } from "../ui/theme";
import * as Location from "expo-location";

const Box = styled.View`
  background-color: ${primary};
  flex: 1;
`;

export default () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      `http://api.weatherstack.com/current?access_key=${config.apiKey}&query=New York`
    ).then((res) => res.json())
  );

  console.log(data);

  return (
    <Box>
      <Text>Hello</Text>
    </Box>
  );
};
