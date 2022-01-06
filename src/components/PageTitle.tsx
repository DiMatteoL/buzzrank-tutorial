import { css, Typography } from "@mui/material";
import { FC } from "react";
import MUIIcon from "./smartIcons/MUIIcon";
import NextIcon from "./smartIcons/NextIcon";

const PageTitle: FC<{}> = () => (
  <div
    css={css`
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      grid-gap: 32px;
    `}
  >
    <NextIcon />
    <Typography variant="h1" fontWeight="400">
      +
    </Typography>
    <MUIIcon />
  </div>
);

export default PageTitle;
