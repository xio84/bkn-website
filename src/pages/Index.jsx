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
import { Card, CardActions, CardContent, CardMedia, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

// Data seeders
const data = [
  {
    "pic": "Coffee.png",
    "name": "Coffee",
    "slot": 100,
    "price": 100000000
  },
  {
    "pic": "Oil.png",
    "name": "Oil",
    "slot": 100,
    "price": 100000000
  },
  {
    "pic": "Rice.png",
    "name": "Rice",
    "slot": 100,
    "price": 100000000
  },
  {
    "pic": "Coffee.png",
    "name": "Coffee",
    "slot": 100,
    "price": 100000000
  },
  {
    "pic": "Oil.png",
    "name": "Oil",
    "slot": 100,
    "price": 100000000
  },
  {
    "pic": "Rice.png",
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
      "Muh. Alkautzar Sanusi",
      "#Commodity: Rice",
      3,
      1000000,
      new Date('2023-07-03')
  ),
  createData(
      "Muh. Yafi",
      "#Commodity: Coffe Beans",
      10,
      3000000,
      new Date('2023-05-05')
  ),
  createData(
      "Aga Subagja",
      "#Commodity: Cooking Oil",
      5,
      3800000,
      new Date('2022-11-01')
  ),
  createData(
      "Oksidian Tafly",
      "#Commodity: Coffe Beans",
      15,
      4500000,
      new Date('2023-05-05')
  ),
]

function threeGrid(d) {
  return (
      <Grid container justifyContent={"space-evenly"}>
      { d.map((content, index) =>
      <Grid item xs={12} md={3.5}>
      <Card>
        {/* <Stack spacing={2}> */}
          <CardMedia component={"img"} src={require(`../assets/commodities/${content.pic}`)} alt={content.name} borderRadius={3}/>
          { 
          index === 0 && <Typography 
            gutterBottom 
            variant="subtitle1" 
            sx={{
              position: "absolute",
              top: "0",
              marginTop: 1,
              marginLeft: 2,
              padding: 0.5,
              textAlign: "left",
              backgroundColor: "yellow",
              borderRadius: 0.5
              }
            }
          >
            Sale ending
          </Typography>
          }
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h3">#Commodity:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right" variant="subtitle1">{content.slot} Slot</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">{content.name}</Typography>
              </Grid>
              <Grid item paddingTop={4}>
                <Typography variant="body2" fontWeight={400}>Rp. {content.price.toLocaleString()}</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ padding: 2 }}>
            <Button variant="contained">Learn More</Button>
          </CardActions>
        {/* </Stack> */}
      </Card>
      </Grid>
      )}
    </Grid>
  )
}

function splitByThree(d) {
  let out = []
  for (let i = 0; i < d.length; i += 3) {
    out.push(threeGrid(d.slice(i, i+3)))
  }
  return out
}

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
                variant="h1"
              >
                Indonesia's Natural 
                Potential in Different 
                Dimension
              </Typography>
              <Typography 
              variant="body1" 
              align="left" 
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
          <Carousel animation="slide">
            {splitByThree(data)}
          </Carousel>
          <Section subtext="Commodity Prospect" heading="Latest Commodity Purchase" />
          <MainTable data={rows} headers={["Name", "Commodity", "Slots Purchased", "Buying Price", "Total Price", "Date"]}/>
          <Section subtext="Commodity Prospect" heading="Latest Commodity Sale" />
          <MainTable data={rows} headers={["Name", "Commodity", "Slots Sold", "Buying Price", "Total Price", "Date"]}/>
          <Contact/>
        </Stack>
      </Container>
      <Footer/>
    </main>
  );
}

export default Home;
