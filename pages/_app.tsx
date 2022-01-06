import * as React from "react";
import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import MUIProvider from "../src/theme/MUIProvider";
import withDarkMode from "next-dark-mode";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
  darkMode?: {
    darkModeActive: boolean;
  };
}

const App: React.FC<MUIAppProps> = ({
  Component,
  emotionCache,
  darkMode,
  pageProps,
}) => {
  return (
    <MUIProvider
      emotionCache={emotionCache}
      darkMode={!!darkMode?.darkModeActive}
    >
      <Component {...pageProps} />
    </MUIProvider>
  );
};

export default withDarkMode(App);
