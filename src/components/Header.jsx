import React, {useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Assets
import bknLogo from "../assets/Home.svg";
import Button from "@mui/material/Button";
import { Box, Grid, Stack } from "@mui/material";
import { getProfile } from "../service/account";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigateOut = useNavigate()
  const { paths, activeContent, profile } = props;

  function logout() {
    window.sessionStorage.removeItem("auth")
    window.location.reload()
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        pt: 3,
        marginBottom: 3,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: "rgba(251, 251, 251, 1)",
        // borderBottom: "1px solid rgba(38, 38, 38, 0.1)",
      }}
    >
      <Toolbar
        style={{
          // flexWrap: "wrap",
          padding: 0,
          paddingBottom: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={3} md={2}>
              <Link href="/">
                <img src={bknLogo} alt="" style={{ maxWidth: "100%" }} />
              </Link>
            </Grid>
            <Grid item xs={6} md={8}>
              <Grid container justifyContent="center" alignItems="center">
                {paths.map((path) => (
                  <Grid item>
                    <Link
                      variant="button"
                      href={path.path}
                      sx={{
                        my: 1,
                        mx: 1.5,
                        textTransform: "none",
                        color: path.pathName === activeContent ? "#347E8F" : "#3030303C",
                        textDecoration: "unset",
                        fontFamily: "Syne",
                        fontWeight: path.pathName === activeContent ? "bold" : "normal",
                      }}
                    >
                      {path.pathName}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3} md={2} ml={"auto"}>
              {
                profile == "" || profile == undefined ?
              <Button href="/login" variant="contained" sx={{ maxWidth: "100%", maxHeight: "100%", ml: "auto" }}>
                Masuk
              </Button> :
              (
                <Stack direction={"row"} spacing={2} sx={{alignItems: "stretch", display: "flex"}}>
                  <Link href="/profile" sx={{alignItems: "end"}}>
                    Hi, {profile.name}
                  </Link>
                  <Button variant="contained" onClick={logout} color="error">
                    Keluar
                  </Button>
                </Stack>
              )
              }
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
