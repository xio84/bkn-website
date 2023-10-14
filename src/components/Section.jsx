import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Section(props) {
  const { subtext, heading } = props;

  return (
    <Stack spacing={0}>
      <Typography variant="subtitle1" align="left" marginBottom={0} paragraph>
        {subtext}
      </Typography>
      <Typography variant="h2" align="left">
        {heading}
      </Typography>
    </Stack>
  );
}
