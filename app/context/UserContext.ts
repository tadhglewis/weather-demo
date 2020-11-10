import { createContext } from "react";

export default createContext<{
  longitude: number | undefined;
  latitude: number | undefined;
}>({
  longitude: undefined,
  latitude: undefined,
});
