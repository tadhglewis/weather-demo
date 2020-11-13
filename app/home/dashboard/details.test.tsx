import React from "react";
import { render } from "@testing-library/react-native";
import Details from "./details";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";
import theme from "styled-theming";

// mocking and always return light theme due to a bug where ThemeProvider isn't passing in the theme to styled-theming in tests
jest.mock("styled-theming", () => (name: string, values: theme.ThemeMap) =>
  values.light
);

describe("details", () => {
  it("should render details", () => {
    const tree = render(
      // <ThemeProvider theme={{ theme: "light" }}>
      <Details
        items={[
          { label: "test", value: "123" },
          { label: "hello", value: "hi" },
        ]}
      />
      // </ThemeProvider>
    );

    expect(tree.getByText("test")).toBeDefined();
    expect(tree.getByText("hello")).toBeDefined();

    expect(tree).toMatchSnapshot();
  });
});
