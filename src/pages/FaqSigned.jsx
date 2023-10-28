import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";

// Components
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

//Assets
import faq from "../assets/FAQ.png";

// const primary = purple[500]; // #f44336

function FaqSigned(props) {
  return (
    // Error Box
    // <Box
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     minHeight: '100vh',
    //     backgroundColor: primary,
    //   }}
    // >
    //   <Typography variant="h1" style={{ color: 'white' }}>
    //     404
    //   </Typography>
    //   <Typography variant="h6" style={{ color: 'white' }}>
    //     The page you’re looking for doesn’t exist.
    //   </Typography>
    //   <Button href='/' variant="contained">Back Home</Button>
    // </Box>
    <main>
      <Header {...props} activeContent="FAQ" />
      <Container>
        <Stack>
          <Grid>
            <img src={faq} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
          <Stack spacing={2}>
            <Typography variant="h1" align="justify" lineHeight={2}>
              Pertanyaan yang sering diajukan
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h3" align="justify" lineHeight={2}>
              (Pertanyaan)
            </Typography>
            <Typography variant="AboutSubTopic" align="justify" lineHeight={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque ipsam! Harum saepe animi hic eaque, omnis reiciendis! Amet eligendi inventore reprehenderit! Sed nobis esse, assumenda voluptatum asperiores ea
              aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque ipsam! Harum saepe animi hic eaque, omnis reiciendis! Amet eligendi inventore reprehenderit! Sed nobis esse, assumenda voluptatum asperiores
              ea aspernatur?
            </Typography>
            <Typography variant="h3" align="justify" lineHeight={2}>
              (Pertanyaan)
            </Typography>
            <Typography variant="AboutSubTopic" align="justify" lineHeight={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque ipsam! Harum saepe animi hic eaque, omnis reiciendis! Amet eligendi inventore reprehenderit! Sed nobis esse, assumenda voluptatum asperiores ea
              aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque ipsam! Harum saepe animi hic eaque, omnis reiciendis! Amet eligendi inventore reprehenderit! Sed nobis esse, assumenda voluptatum asperiores
              ea aspernatur?
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}

export default FaqSigned;
