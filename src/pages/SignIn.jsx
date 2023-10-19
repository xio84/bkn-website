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
            <Grid item xs={0} md={6}>
              <Box component={"img"} src={indo} alt="" display={{ xs: "none", md: "block" }} style={{ float: "right", maxWidth: "100%", maxHeight: "100%" }} />
            </Grid>
            <Grid item md={6}>
              <Container maxWidth="lg">
                <Typography align="center" textDecoration="unset" variant="SignIn">
                  Sign In
                </Typography>
              </Container>
              <Container>
                <Typography align="center" textDecoration="unset" variant="SubSignIn">
                  Selamat datang silahkan masukkan data Anda.
                </Typography>
              </Container>
              <br></br>
              <Container>
                {
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "40ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField id="outlined-username-input" label="Nama" type="text" autoComplete="current-password" />
                    </div>
                    <div>
                      <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                    </div>
                  </Box>
                }
                <Button variant="contained" style={{ height: 45, width: 335, marginTop: 10 }}>
                  Sign In
                </Button>
                <Grid>
                  <br></br>
                  <Typography align="center" variant="HelpBold">
                    Butuh Bantuan?{" "}
                  </Typography>
                  <Typography align="center" display={"inline"} variant="Help">
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
