import { createContext, Dispatch, SetStateAction } from "react";
import { DEFAULT_THEME, AllowedTheme } from ".";

interface PreferredThemeContextProps {
  preferredTheme: AllowedTheme;
  setPreferredTheme: Dispatch<SetStateAction<AllowedTheme>>;
}

const PreferredThemeContext = createContext<PreferredThemeContextProps>({
  preferredTheme: DEFAULT_THEME,
  setPreferredTheme: () => {},
});

export default PreferredThemeContext;
