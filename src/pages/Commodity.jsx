import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
import Footer from "../components/Footer";
import { Divider } from "@mui/material";

// Data seeders
const data = [
  {
    pic: require("../assets/commodities/Coffee.png"),
    name: "Biji Kopi",
    slot: 100,
    price: 100000000,
  },
  {
    pic: require("../assets/commodities/Oil.png"),
    name: "Minyak Goreng",
    slot: 100,
    price: 100000000,
  },
  {
    pic: require("../assets/commodities/Rice.png"),
    name: "Gabah",
    slot: 100,
    price: 100000000,
  },
];

function createData(commodity = "", slot = 0, price = 0, date = new Date.now()) {
  return { commodity, slot, price, date };
}

const rows = [
  createData("Gabah", 100, 1000000, new Date("2023-05-05")),
  createData("Minyak Goreng", 100, 1000000, new Date("2023-05-05")),
  createData("Gabah", 100, 1000000, new Date("2023-05-05")),
  createData("Biji Kopi", 100, 1000000, new Date("2023-05-05")),
];

function Commodity(props) {
  return (
    <main>
      <Header {...props} activeContent="Collections" />
      <Container maxWidth="xl">
        <Stack spacing={8}>
          <Typography variant="subtitle1" align="left">
            Home &gt; Collections
          </Typography>
          <Grid container>
            <Grid item container xs={12} lg={6} justifyContent={"center"} alignItems={"center"}>
              <img src={coffee} alt="coffee" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={8}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body" align="left" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph>
                      Komoditas Kami
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="right" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph>
                      Penjualan Hingga
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h2" align="left" color="#003E69" textDecoration="unset" fontFamily="Syne" fontSize={30} fontWeight={700}>
                      #Komoditas: Gabah
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="right" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph>
                      08 Juli 2023
                    </Typography>
                  </Grid>
                </Grid>
                <Stack spacing={2}>
                  <Typography variant="subtitle1">Deskripsi</Typography>
                  <Typography variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lorem et velit egestas blandit in sed enim. Nam a leo ac enim lacinia lobortis.</Typography>
                </Stack>
                <Grid container rowSpacing={2} justifyContent={"space-evenly"} mt={"auto"}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Slots Tersedia</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Harga saat ini</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h3" fontFamily={"Montserrat"} fontWeight={700} letterSpacing={-0.03} fontSize={15}>
                      100 Slot
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography display={"inline"} variant="h3" fontFamily={"Montserrat"} fontWeight={700} letterSpacing={-0.03} fontSize={15}>
                      Rp. 100.000.000,-
                    </Typography>
                    <Typography display={"inline"} variant="subtitle1">
                      /slot
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider></Divider>
                  </Grid>
                  <Grid item xs={5}>
                    <Button variant="contained" fullWidth>
                      Beli Sekarang
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button variant="outlined" fullWidth>
                      Selengkapnya
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <Section subtext="Tabel Ikhtisar" heading="Sejarah Pembelian Komoditas" />
          <MainTable data={rows} headers={["Komoditas", "Jumlah Slot", "Harga Total", "Tanggal Pembelian", "Periode Kontak", "Kupon Terkumpul"]} />
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}

export default Commodity;
