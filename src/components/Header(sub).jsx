import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Assets
import bknLogo from "../assets/NewLogo.png";
import Button from "@mui/material/Button";
import { Box, Grid, Stack } from "@mui/material";

export default function Header(props) {
  const { paths, activeContent } = props;

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
          <Grid container justifyContent="space-between" alignItems="center" marginLeft={60}>
            <Grid item xs={3} md={2}>
              <Link href="/">
                <img src={bknLogo} alt="" style={{ maxWidth: "100%" }} />
              </Link>
            </Grid>
            {/* <Grid item xs={3} md={2} ml={"auto"}>
              <Button href="" variant="contained" sx={{ maxWidth: "100%", maxHeight: "100%", ml: "auto" }}>
                Masuk
              </Button>
            </Grid> */}
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
