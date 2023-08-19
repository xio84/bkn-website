import * as React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Container, TextField, Button } from '@mui/material';


export default function Contact(props) {
  return (
    <Container 
    maxWidth="false" 
    sx={{
      backgroundColor: "rgba(251, 251, 251, 1)", 
      borderRadius: "2",
      padding: "20px",
  }}>
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <Stack spacing={2}>
        <Typography
          variant="h2"
          align="left"
          color="#003E69"
          textDecoration="unset"
          fontFamily="Syne"
          fontSize={30}
          fontWeight={700}
        >
          Find your Commodity Prospect
        </Typography>
        <Typography 
          variant="body" 
          align="left" 
          color="grey"
          textDecoration="unset"
          fontFamily="Montserrat"
          marginBottom={0}
          paragraph
        >
          Stay in the loop with everything you need to know.
        </Typography>
      </Stack>
      <Stack alignItems={"center"} direction={"row"} spacing={5}>
        <TextField id="email" label="Input Email" variant="outlined"/>
        <Button variant="contained">Subscribe</Button>
      </Stack>
    </Stack>
  </Container>
  );
}
