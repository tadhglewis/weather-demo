import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components/native";
import Favorites from "./favorites";

const Box = styled.View`
  flex: 1;
`;

export default ({
  setLocation,
}: {
  setLocation: Dispatch<SetStateAction<string | undefined>>;
}) => {
  return (
    <Box>
      <Favorites setLocation={setLocation} />
    </Box>
  );
};
