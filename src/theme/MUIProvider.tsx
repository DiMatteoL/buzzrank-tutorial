import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
import PreferredThemeProvider from "./PreferredThemeProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MUIWrapperProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

const MUIWrapper: React.FC<MUIWrapperProps> = ({
  children,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <PreferredThemeProvider>
        <CssBaseline />
        {children}
      </PreferredThemeProvider>
    </CacheProvider>
  );
};

export default MUIWrapper;
