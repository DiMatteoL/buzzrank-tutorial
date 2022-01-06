import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DEFAULT_THEME, AllowedTheme, themeOptions } from ".";
import PreferredThemeContext from "./PreferredThemeContext";

interface PreferredThemeProviderProps {
  children: ReactNode;
}

const PreferredThemeProvider: FC<PreferredThemeProviderProps> = ({
  children,
}) => {
  const [preferredTheme, setPreferredTheme] = useState(DEFAULT_THEME);

  const getStoredPreferredTheme = useCallback(() => {
    const rawStoredTheme = localStorage.getItem("preferredTheme");
    if (rawStoredTheme && ["dark", "light"].includes(rawStoredTheme)) {
      setPreferredTheme(rawStoredTheme as AllowedTheme);
    }
  }, []);

  const storePreferredTheme = useCallback(
    (newTheme: AllowedTheme) => {
      localStorage.setItem("preferredTheme", newTheme);
      return setPreferredTheme(newTheme);
    },
    [setPreferredTheme]
  ) as Dispatch<SetStateAction<AllowedTheme>>;

  const theme = useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: {
          ...themeOptions.palette,
          mode: preferredTheme,
        },
      }),
    [preferredTheme]
  );

  return (
    <>
      <PreferredThemeContext.Provider
        value={{ preferredTheme, setPreferredTheme: storePreferredTheme }}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PreferredThemeContext.Provider>
    </>
  );
};

export default PreferredThemeProvider;
