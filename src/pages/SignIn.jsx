import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

// Components
// import PropertyList from "../components/marketplace/Property";
// import HistorySummary from "../../components/surveyor/HistorySummary";

import indo from "../assets/Temp.png";
import Typography from "@mui/material/Typography";

// Components
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { CenterFocusStrong } from "@mui/icons-material";

function SignIn(props) {
  return (
    <main>
      <Header {...props} activeContent="SignIn" />
      <Container maxWidth="lg">
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={0} md={6} align="center">
              <Box component={"img"} src={indo} alt="" display={{ xs: "none", md: "block" }} style={{ float: "right", maxWidth: "100%", maxHeight: "100%" }} />
            </Grid>
            <Grid item md={6}>
              <Container maxWidth="lg">
                <Typography align="center" textDecoration="unset" variant="SignIn" marginLeft={12}>
                  Sign In
                </Typography>
              </Container>
              <Container>
                <Typography align="center" textDecoration="unset" variant="SubSignIn" marginLeft={12}>
                  Selamat datang silahkan masukkan data Anda.
                </Typography>
              </Container>
              <br></br>
              <Container>
                {
                  <Box
                    component="form"
                    textAlign={"center"}
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "45ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField id="outlined-username-input" label="Nama" type="text" autoComplete="current-name" />
                    </div>
                    <div>
                      <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                    </div>
                  </Box>
                }
                <Button variant="contained" style={{ height: 45, width: 335, marginTop: 10, marginLeft: 84 }}>
                  Sign In
                </Button>
                <Grid textAlign={"center"}>
                  <br></br>

                  <Typography variant="HelpBold">Butuh Bantuan? </Typography>
                  <Typography display={"inline"} variant="Help">
                    Hubungi Kami.
                  </Typography>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Box>

        <Contact />
      </Container>

      <Footer />
    </main>
  );
}

export default SignIn;
