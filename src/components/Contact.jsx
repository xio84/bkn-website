import * as React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Container, TextField, Button, Grid } from "@mui/material";

//Components
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Footer from "../components/Footer";
import { CenterFocusStrong } from "@mui/icons-material";

export default function Contact(props) {
  return null;
  return (
    <Container
      maxWidth="false"
      sx={{
        backgroundColor: "rgba(251, 251, 251, 1)",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2} display={{ xs: "none", md: "block" }}>
            <Typography variant="h2" align="left">
              Temukan Prospek Komoditas Anda
            </Typography>
            <Typography variant="body1" align="left" paragraph>
              Tetap ikuti perkembangan semua hal yang perlu Anda ketahui.
            </Typography>
          </Stack>
          <Typography variant="h2" align="center" display={{ md: "none" }} mb={2}>
            Find your Commodity Prospect
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack alignItems={"center"} direction={"row"} spacing={5} display={{ xs: "none", md: "block" }}>
            <TextField id="email" label="Input Email" variant="outlined" />
            <Button variant="contained">Subscribe</Button>
          </Stack>
          <Stack alignItems={"center"} spacing={5} display={{ md: "none" }}>
            <TextField id="email" label="Input Email" variant="outlined" />
            <Button variant="contained">Subscribe</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
