import { css } from "@mui/material";
import type { NextPage } from "next";
import PageTitle from "../src/components/PageTitle";
import ThemeUpdater from "../src/components/ThemeUpdater";

const Home: NextPage = () => {
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <PageTitle />
      <ThemeUpdater />
    </main>
  );
};

export default Home;
