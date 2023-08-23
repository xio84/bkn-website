import * as React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Container, TextField, Button, Grid } from '@mui/material';


export default function Contact(props) {
  return (
    <Container 
    maxWidth="false" 
    sx={{
      backgroundColor: "rgba(251, 251, 251, 1)", 
      borderRadius: "20px",
      padding: "20px",
  }}>
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item xs={12} md={8}>
        <Stack spacing={2} display={{ xs: 'none', md: 'block' }}>
          <Typography
            variant="h2"
            align="left"
          >
            Find your Commodity Prospect
          </Typography>
          <Typography 
            variant="body1" 
            align="left"
            paragraph
          >
            Stay in the loop with everything you need to know.
          </Typography>
        </Stack>
        <Typography
            variant="h2"
            align="center"
            display={{ md: 'none' }}
            mb={2}
          >
            Find your Commodity Prospect
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack alignItems={"center"} direction={"row"} spacing={5}  display={{ xs: 'none', md: 'block' }}>
          <TextField id="email" label="Input Email" variant="outlined"/>
          <Button variant="contained">Subscribe</Button>
        </Stack>
        <Stack alignItems={"center"} spacing={5}  display={{ md: 'none' }}>
          <TextField id="email" label="Input Email" variant="outlined"/>
          <Button variant="contained">Subscribe</Button>
        </Stack>
      </Grid>
    </Grid>
  </Container>
  );
}
