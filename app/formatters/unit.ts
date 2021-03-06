import Unit from "../Unit";

export default (unit: Unit | undefined): "C" | "K" | "F" | undefined => {
  if (unit === "m") return "C";
  if (unit === "s") return "K";
  if (unit === "f") return "F";
};
