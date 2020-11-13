import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components/native";
import { primary, secondary, textPrimary, textSecondary } from "../../ui/theme";

const Box = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const Card = styled.TouchableOpacity`
  shadow-color: ${primary};
  shadow-offset: 0 1px;
  shadow-opacity: 0.22;
  shadow-radius: 2.22px;
  elevation: 3;
  padding: 8px 16px;
  background-color: ${primary};
  border-radius: 16px;
  margin: 0 8px;
`;

const Name = styled.Text`
  color: ${textPrimary};
`;

// dummy data - would pull from saved favorites in AsyncStorage
const favorites: { name: string }[] = [
  { name: "Melbourne" },
  { name: "Brisbane" },
  { name: "London" },
];

export default ({
  setLocation,
}: {
  setLocation: Dispatch<SetStateAction<string | undefined>>;
}) => (
  <Box>
    {favorites.map(({ name }) => (
      <Card key={name} onPress={() => setLocation(name)}>
        <Name>{name}</Name>
      </Card>
    ))}
  </Box>
);
