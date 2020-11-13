import { createContext, Dispatch, SetStateAction } from "react";

export default createContext<{
  setTheme: Dispatch<SetStateAction<"light" | "dark">> | undefined;
  theme: "light" | "dark" | undefined;
  locate: (() => void) | undefined;
}>({ setTheme: undefined, theme: undefined, locate: undefined });