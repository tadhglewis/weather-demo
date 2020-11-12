import unit from "./unit";
import Unit from "../Unit";

describe("unit", () => {
  it("should return correct temperature letter", () => {
    expect(unit("f")).toEqual("F");
    expect(unit("m")).toEqual("C");
    expect(unit("s")).toEqual("K");
  });

  it("should return undefined for unknown units", () => {
    expect(unit("a" as Unit)).toEqual(undefined);
  });
});
