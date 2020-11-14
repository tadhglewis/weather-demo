import React from "react";
import styled from "styled-components/native";
import { primary, textPrimary } from "../../ui/theme";
import useApp from "../../hooks/useApp";

const Box = styled.View`
  flex-direction: row;
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

export default () => {
  const { setLocation } = useApp();

  return (
    <Box>
      {favorites.map(({ name }) => (
        <Card key={name} onPress={() => setLocation?.(name)}>
          <Name>{name}</Name>
        </Card>
      ))}
    </Box>
  );
};
