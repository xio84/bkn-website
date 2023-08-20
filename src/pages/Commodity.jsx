import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Components
// import PropertyList from "../components/marketplace/Property";
// import HistorySummary from "../../components/surveyor/HistorySummary";

import coffee from "../assets/commodities/Coffee.png";
import Typography from "@mui/material/Typography";

// Table
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Contact from "../components/Contact";
import Footer from "../components/Footer"
import { Divider } from "@mui/material";

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


function Commodity(props) {
  return (
    <main>
      <Header {...props} activeContent="Collections"/>
      <Container maxWidth="xl">
        <Stack spacing={8}>
          <Typography variant="subtitle1" align="left">
            Home &gt; Collections
          </Typography>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <img src={coffee} alt="coffee" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={8}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography 
                      variant="body" 
                      align="left" 
                      color="grey"
                      textDecoration="unset"
                      fontFamily="Montserrat"
                      marginBottom={0}
                      paragraph
                    >
                      Our Commodity
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography 
                      variant="body" 
                      align="right" 
                      color="grey"
                      textDecoration="unset"
                      fontFamily="Montserrat"
                      marginBottom={0}
                      paragraph
                    >
                      Sale Ends
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>                     
                    <Typography
                      variant="h2"
                      align="left"
                      color="#003E69"
                      textDecoration="unset"
                      fontFamily="Syne"
                      fontSize={30}
                      fontWeight={700}
                    >
                      #Commodity: Rice
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography 
                      variant="body" 
                      align="right" 
                      color="grey"
                      textDecoration="unset"
                      fontFamily="Montserrat"
                      marginBottom={0}
                      paragraph
                    >
                      08 July 2023
                    </Typography>
                  </Grid>
                </Grid>
                <Stack spacing={2}>
                  <Typography variant="subtitle1">
                    Description
                  </Typography>
                  <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lorem et 
                  velit egestas blandit in sed enim. Nam a leo ac enim lacinia lobortis.
                  </Typography>
                </Stack>
                <Grid container rowSpacing={2} justifyContent={"space-between"} mt={"auto"}>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1">
                      Current Price
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1">
                      Slot Price
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1">
                      Minimum Price
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h2" fontFamily={"Montserrat"} fontWeight={700} letterSpacing={-0.03} fontSize={15}>
                      Rp. 100.000.000,-
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h3" fontFamily={"Montserrat"} fontWeight={700} letterSpacing={-0.03} fontSize={15}>
                      100 Slot
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography display={"inline"} variant="h3" fontFamily={"Montserrat"} fontWeight={700} letterSpacing={-0.03} fontSize={15}>
                    Rp. 100.000.000,-
                    </Typography>
                    <Typography display={"inline"} variant="subtitle1">/slot</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider></Divider>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth>
                      Buy Now
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="outlined" fullWidth>
                      Make Offer
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
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

export default Commodity;
