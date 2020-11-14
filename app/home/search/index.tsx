import React, { useState } from "react";
import styled from "styled-components/native";
import useApp from "../../hooks/useApp";
import useTimeout from "../../hooks/useTimeout";
import { primary, secondary, textPrimary } from "../../ui/theme";
import Favorites from "./favorites";
import ui from "../../ui";

const { icon } = ui;

const Box = styled.View`
  flex: 1;
`;

const Search = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  border: 3px solid ${primary};
  border-radius: 16px;
  margin: 16px 8px;
  padding-left: 13px;
  color: ${secondary};
`;

const SearchButton = styled.TouchableOpacity`
  position: absolute;
  right: 22px;
`;

const SearchIcon = styled(icon)`
  color: ${primary};
`;

export default ({}: {}) => {
  const [text, setText] = useState<string>("");
  const { setLocation, locate, theme } = useApp();

  return (
    <Box>
      <Search>
        <Input
          placeholderTextColor={theme === "light" ? "#1e1e1e" : "white"}
          placeholder="Search..."
          style={{ flex: 1 }}
          value={text}
          onChangeText={setText}
          onBlur={
            text
              ? () => {
                  setLocation?.(text);
                  setText("");
                }
              : locate
          }
        />
        <SearchButton
          onPress={
            text
              ? () => {
                  setLocation?.(text);
                  setText("");
                }
              : locate
          }
        >
          <SearchIcon icon="search" size={20} />
        </SearchButton>
      </Search>
      <Favorites />
    </Box>
  );
};
