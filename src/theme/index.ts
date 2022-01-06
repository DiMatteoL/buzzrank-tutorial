import { ThemeOptions, PaletteOptions } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
  },
};


