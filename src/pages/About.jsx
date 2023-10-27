import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";

// Components
// import PropertyList from "../components/marketplace/Property";
// import HistorySummary from "../../components/surveyor/HistorySummary";

import indo from "../assets/Temp.png";

// Components
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { CenterFocusStrong } from "@mui/icons-material";

// Assets
import bknLogo from "../assets/NewLogo.png";
import aboutUs from "../assets/AboutUs.png";

// const primary = purple[500]; // #f44336

export default function About(props) {
  return (
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
    //     About page is still WIP
    //   </Typography>
    //   <Button href='/' variant="contained">Back Home</Button>
    // </Box>
    <main>
      <Header {...props} activeContent="Tentang Kami" />
      <Container>
        <Stack>
          <Grid>
            <img src={aboutUs} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid>
            <img src={bknLogo} alt="" style={{ maxWidth: "20%", paddingTop: "50px" }} />
          </Grid>
          <Stack spacing={2}>
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
