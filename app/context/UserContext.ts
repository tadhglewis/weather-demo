import { createContext } from "react";

export default createContext<
  | {
      longitude: number;
      latitude: number;
    }
  | undefined
>(undefined);
