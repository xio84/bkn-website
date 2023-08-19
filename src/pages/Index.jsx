import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Components
// import PropertyList from "../components/marketplace/Property";
// import HistorySummary from "../../components/surveyor/HistorySummary";

import indo from "../assets/indonesia.png";
import Typography from "@mui/material/Typography";

// Components
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Data seeders
const data = [
  {
    "pic": require("../assets/commodities/Coffee.png"),
    "name": "Coffee",
    "slot": 100,
    "price": 100000000
  },
  {
    "pic": require("../assets/commodities/Oil.png"),
    "name": "Oil",
    "slot": 100,
    "price": 100000000
  },
  {
    "pic": require("../assets/commodities/Rice.png"),
    "name": "Rice",
    "slot": 100,
    "price": 100000000
  },
]

function createData(name = '', commodity = '', slot = 0, price = 0, date=new Date.now()) {
  return { name, commodity, slot, price, date }
}

const rows = [
  createData(
      "aa",
      "Rice",
      100,
      1000000,
      new Date('2023-05-05')
  ),
  createData(
      "aa",
      "Oil",
      100,
      1000000,
      new Date('2023-05-05')
  ),
  createData(
      "aa",
      "Rice",
      100,
      1000000,
      new Date('2023-05-05')
  ),
  createData(
      "aa",
      "Coffee",
      100,
      1000000,
      new Date('2023-05-05')
  ),
]


function Home(props) {
  return (
    <main>
      <Header {...props} activeContent="Home"/>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Container maxWidth="lg">
              <Typography
                align="left"
                textDecoration="unset"
                sx={{
                  color: "#243a72",
                  fontFamily: "Syne",
                  fontSize: "45px",
                  fontWeight: 700,
                  lineHeight: "55px",
                }}
              >
                Indonesia's Natural 
                Potential in Different 
                Dimension
              </Typography>
              <Typography 
              variant="h5" 
              align="left" 
              color="#003E69"
              textDecoration="unset"
              fontFamily="Montserrat"
              paragraph>
              KBI presents an innovation in exploring Indonesia's natural
              potential in the technological dimension in the form of nft.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="left"
              >
                <Button variant="contained">Explore More</Button>
                <Button variant="outlined">Register Now</Button>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <img src={indo} alt="" width="500" style={{ float: "right" }} />
          </Grid>
        </Grid>
      </Box>
      <Container maxWidth="xl">
        <Stack spacing={8}>
          <Section subtext="Ready to Collect" heading="Latest Collections" />
          {/* List of collections */}
          <Grid container spacing={2}>
            { data.map((content) =>
            <Grid item xs={12} md={4} overflow={"hidden"}>
              <Stack>
                <Box component={"img"} src={content.pic} alt={content.name} borderRadius={3} sx={{float: "center"}}>
                </Box>
                <Stack direction={"row"} flexWrap={"nowrap"} justifyContent={"space-between"}>
                  <Typography>#Commodity:</Typography>
                  <Typography>{content.slot} Slot</Typography>
                </Stack>
                <Typography>{content.name}</Typography>
                <Typography>Rp. {content.price.toLocaleString()}</Typography>
              </Stack>
            </Grid>
            )}
          </Grid>
          <Section subtext="Commodity Prospect" heading="Latest Commodity Purchase" />
          <MainTable data={rows} />
          <Contact/>
        </Stack>
      </Container>
      <Footer/>
    </main>
  );
}

export default Home;
