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

// Table
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Contact from "../components/Contact";
import Footer from "../components/Footer"

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
