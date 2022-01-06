import * as React from "react";
import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import MUIProvider from "../src/theme/MUIProvider";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: React.FC<MUIAppProps> = ({ Component, emotionCache, pageProps }) => {
  return (
    <MUIProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </MUIProvider>
  );
};

export default App;
