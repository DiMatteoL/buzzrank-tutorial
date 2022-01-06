import { Button, css, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useDarkMode } from "next-dark-mode";

const Home: NextPage = () => {
  const {
    darkModeActive, // boolean - whether the dark mode is active or not
    switchToDarkMode, // function - toggles the dark mode on
    switchToLightMode, // function - toggles the light mode on
  } = useDarkMode();
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        > * {
          margin: 8px;
        }
      `}
    >
      <Typography variant="h3">
        Currently in {darkModeActive ? "dark" : "light"} mode
      </Typography>
      <Button
        onClick={() =>
          darkModeActive ? switchToLightMode() : switchToDarkMode()
        }
        variant="contained"
      >
        Change theme
      </Button>
    </main>
  );
};

export default Home;
