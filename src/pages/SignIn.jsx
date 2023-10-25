import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
// import PropertyList from "../components/marketplace/Property";
// import HistorySummary from "../../components/surveyor/HistorySummary";

import indo from "../assets/Temp.png";
import Typography from "@mui/material/Typography";

// Components
import Header from "../components/Header(sub)";
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
              <Box component={"img"} src={indo} alt="" display={{ xs: "none", md: "block" }} style={{ float: "right", maxWidth: "100%", maxHeight: "100%", margin: "0%" }} />
            </Grid>
            <Grid item md={6}>
              <Container maxWidth="lg">
                <Typography align="center" textDecoration="unset" variant="SignIn" marginLeft={10}>
                  Masuk
                </Typography>
              </Container>
              <Container>
                <Typography align="center" textDecoration="unset" variant="SubSignIn" marginLeft={10}>
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
                      <TextField id="outlined-password-input" label="Kata Sandi" type="password" autoComplete="current-password" />
                    </div>
                  </Box>
                }
                <Button variant="contained" style={{ height: 45, width: 335, marginTop: 10, marginLeft: 93 }}>
                  Masuk
                </Button>
                <Grid textAlign={"center"}>
                  <br></br>

                  <Typography variant="HelpBold">Belum Memiliki Akun? </Typography>
                  {/* <Typography display={"inline"} variant="Help">
                    Buat Akun.
                  </Typography> */}
                  <a href="/signup" variant="HelpBold">
                    Buat Akun.
                  </a>
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
