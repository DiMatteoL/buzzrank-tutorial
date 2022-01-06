import { Box, Button, css, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useContext } from "react";
import PreferredThemeContext from "../src/theme/PreferredThemeContext";

const Home: NextPage = () => {
  const { preferredTheme, setPreferredTheme } = useContext(
    PreferredThemeContext
  );
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
      <Typography variant="h3">Currently in {preferredTheme} mode</Typography>
      <Button
        onClick={() =>
          setPreferredTheme(preferredTheme === "dark" ? "light" : "dark")
        }
        variant="contained"
      >
        Change theme
      </Button>
    </main>
  );
};

export default Home;
