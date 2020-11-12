import React from "react";
import styled from "styled-components/native";
import { textPrimary, textSecondary } from "../../ui/theme";

const Box = styled.View`
  margin-top: 32px;
`;

const Row = styled.View`
  width: 30%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.Text`
  color: ${textPrimary};
  font-size: 16px;
  text-transform: uppercase;
`;

const Value = styled.Text`
  color: ${textSecondary};
  font-size: 16px;
`;

export default ({
  items,
}: {
  items: { label: string; value: string | undefined }[];
}) => (
  <Box>
    {items
      .filter(({ value }) => Boolean(value))
      .map(({ label, value }) => (
        <Row key={label + value}>
          <Label>{label}</Label>
          <Value>{value}</Value>
        </Row>
      ))}
  </Box>
);
