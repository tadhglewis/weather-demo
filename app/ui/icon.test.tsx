import React from "react";
import { render } from "@testing-library/react-native";
import Icon from "./icon";
import "jest-styled-components";

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: "",
}));

describe("icon", () => {
  it("should render icon", () => {
    expect(render(<Icon icon="cloud" size={16} />)).toMatchSnapshot();
  });

  it("should render styled icon", () => {
    const tree = render(
      <Icon icon="font-awesome" size={32} style={{ backgroundColor: "red" }} />
    );

    expect(tree.toJSON()?.props.style.backgroundColor).toEqual("red");

    expect(tree).toMatchSnapshot();
  });
});
