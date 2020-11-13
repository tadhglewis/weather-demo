import React from "react";
import styled from "styled-components/native";
import { textPrimary, textSecondary } from "../../ui/theme";

const Box = styled.View`
  margin-top: 16px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.Text`
  color: ${textPrimary};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
`;

const Value = styled.Text`
  color: ${textSecondary};
  font-size: 12px;
  margin-left: 32px;
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
