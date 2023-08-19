import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider, Grid, Link, Stack } from "@mui/material";

import bigLogo from "../assets/bigLogo.png";

const items = ["Home", "About", "Privacy"]

function Copyright() {
  return (
    <Typography variant="subtitle2" color="#30303099" sx={{ textAlign: "left" }}>
      ©{new Date().getFullYear()} Kliring Berjangka Indonesia
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 4,
        mt: 10,
        backgroundColor: "rgba(251, 251, 251, 1)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item lg={"auto"} xs={0}>
            <img src={bigLogo} alt="big logo"/>
          </Grid>
          <Grid item lg={6} xs={0}>
            <Typography 
              variant="body" 
              align="left" 
              color="grey"
              textDecoration="unset"
              fontFamily="Montserrat"
              marginBottom={0}
              paragraph
            >
            PT Kliring Berjangka Indonesia is a state-owned company engaged in the 
            commodity trading industry, its role as a guarantee center and transaction 
            settlement.
            </Typography>
          </Grid>
          <Grid item lg={"auto"} xs={12} marginLeft={"auto"}>
            <Stack direction={"row"}>
              {items.map((item) => (
                <Link
                  variant="button"
                  href="/"
                  sx={{
                    my: 1,
                    mx: 1.5,
                    textTransform: "none",
                    color: "#003E69",
                    textDecoration: "unset",
                    fontFamily: "Syne",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
              <Divider></Divider>
          </Grid>
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
