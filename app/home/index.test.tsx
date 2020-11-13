import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import "jest-styled-components";
import theme from "styled-theming";
import Home from "./";
import { StackScreenProps } from "@react-navigation/stack";
import useApp from "../hooks/useApp";

jest.mock("../hooks/useApp");

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: "",
}));

// mocking and always return light theme due to a bug where ThemeProvider isn't passing in the theme to styled-theming in tests
jest.mock("styled-theming", () => (name: string, values: theme.ThemeMap) =>
  values.light
);

describe("home", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should switch to dark theme", () => {
    const mockSetTheme = jest.fn();

    (useApp as jest.Mock).mockReturnValue({
      setTheme: mockSetTheme,
      theme: "light",
    });

    const { getByTestId } = render(
      <Home
        {...({ route: { params: { location: undefined } } } as StackScreenProps<
          AppNav,
          "home"
        >)}
      />
    );

    fireEvent.press(getByTestId("lightsOut"));

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });
});
