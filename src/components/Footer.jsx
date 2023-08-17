import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

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
        mt: 2,
        backgroundColor: "rgba(251, 251, 251, 1)",
      }}
    >
      <Container maxWidth="xl">
        <Copyright />
      </Container>
    </Box>
  );
}
