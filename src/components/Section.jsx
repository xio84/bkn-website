import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';


export default function Section(props) {
  const { subtext, heading } = props;

  return (
    <Stack spacing={0}>
    <Typography 
      variant="body" 
      align="left" 
      color="grey"
      textDecoration="unset"
      fontFamily="Montserrat"
      marginBottom={0}
      paragraph
    >
      {subtext}
    </Typography>
    <Typography
      variant="h2"
      align="left"
      color="#003E69"
      textDecoration="unset"
      fontFamily="Syne"
      fontSize={30}
      fontWeight={700}
    >
      {heading}
    </Typography>
    </Stack>
  );
}
