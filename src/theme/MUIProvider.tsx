import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
import { createTheme, ThemeProvider } from "@mui/material";
import { MUIAppProps } from "../../pages/_app";
import { themeOptions } from ".";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MUIWrapperProps {
  children: React.ReactNode;
  darkMode: boolean;
  emotionCache?: EmotionCache;
}

const MUIWrapper: React.FC<MUIWrapperProps> = ({
  children,
  darkMode,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider
        theme={createTheme({
          ...themeOptions,
          palette: {
            ...themeOptions.palette,
            mode: darkMode ? "dark" : "light",
          },
        })}
      >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MUIWrapper;
