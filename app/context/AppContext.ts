import { createContext, Dispatch, SetStateAction } from "react";

export default createContext<{
  setTheme: Dispatch<SetStateAction<"light" | "dark">> | undefined;
  theme: "light" | "dark" | undefined;
  locate: (() => void) | undefined;
  location: string | undefined;
  setLocation: Dispatch<SetStateAction<string | undefined>> | undefined;
}>({
  setTheme: undefined,
  theme: undefined,
  locate: undefined,
  location: undefined,
  setLocation: undefined,
});
