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

function createData(commodity = "", slot = 0, price = 0, date = new Date.now(), coupon = "") {
  return { commodity, slot, price, date, coupon };
}

const rows = [
  createData("Gabah", 100, 1000000, new Date("2023-05-05"), "1 Kupon"),
  createData("Minyak Goreng", 100, 1000000, new Date("2023-05-05"), "1 Kupon"),
  createData("Gabah", 100, 1000000, new Date("2023-05-05"), "1 Kupon"),
  createData("Biji Kopi", 100, 1000000, new Date("2023-05-05"), "1 Kupon"),
];

function Commodity(props) {
  return (
    <main>
      <Header {...props} activeContent="Komoditas" />
      <Container maxWidth="xl">
        <Stack spacing={8}>
          <Typography variant="subtitle1" align="left">
            Home &gt; Komoditas
          </Typography>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <Stack spacing={8}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h2" align="left" color="#347E8F" textDecoration="unset" fontFamily="Syne" fontSize={30} fontWeight={700}>
                      Beras
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="right" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph></Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="left" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph>
                      Komoditas Indonesia
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="right" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph></Typography>
                  </Grid>
                </Grid>
                <Stack spacing={2}>
                  <Typography variant="subtitle1">Deskripsi</Typography>
                  <Typography variant="subtitle1" align="justify">
                    Beras merupakan butir padi yang sudah dipisahkan dari sekam. Kandungan utama yang sudah pasti ada dalam beras ialah karbohidrat. Kandungan ini membuat orang yang memakannya merasa kenyang selama beberapa jam. Definisi
                    beras adalah sebagai hasil utama dari proses penggilingan gabah hasil tanaman padi (Oryza sativa L.) yang seluruh lapisan sekamnya terkelupas dan seluruh atau hanya sebagian lapisan bekatulnya telah dipisahkan.
                  </Typography>
                </Stack>
                <Grid container rowSpacing={2} justifyContent={"space-evenly"} mt={"auto"}>
                  <Grid item xs={6}>
                    <Typography variant="h3" fontFamily={"Montserrat"} fontWeight={700} letterSpacing={-0.03} fontSize={15}>
                      Beras
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="dateText">100 </Typography>
                    <Typography display={"inline"} variant="subtitle1">
                      Lot Tersisa
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Rp 10.000/ Lot</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth>
                      Beli Sekarang
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item container xs={12} lg={6} justifyContent={"center"} alignItems={"center"}>
              <img src={coffee} alt="coffee" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <Stack spacing={8}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h2" align="left" color="#347E8F" textDecoration="unset" fontFamily="Syne" fontSize={30} fontWeight={700}>
                      Beras
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="right" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph></Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="left" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph>
                      Komoditas Indonesia
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="right" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph></Typography>
                  </Grid>
                </Grid>
                <Stack spacing={2}>
                  <Typography variant="subtitle1">Deskripsi</Typography>
                  <Typography variant="subtitle1" align="justify">
                    Beras merupakan butir padi yang sudah dipisahkan dari sekam. Kandungan utama yang sudah pasti ada dalam beras ialah karbohidrat. Kandungan ini membuat orang yang memakannya merasa kenyang selama beberapa jam. Definisi
                    beras adalah sebagai hasil utama dari proses penggilingan gabah hasil tanaman padi (Oryza sativa L.) yang seluruh lapisan sekamnya terkelupas dan seluruh atau hanya sebagian lapisan bekatulnya telah dipisahkan.
                  </Typography>
                </Stack>
                <Grid container rowSpacing={2} justifyContent={"space-evenly"} mt={"auto"}>
                  <Grid item xs={6}>
                    <Typography variant="h3" fontFamily={"Montserrat"} fontWeight={700} letterSpacing={-0.03} fontSize={15}>
                      Beras
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="dateText">100 </Typography>
                    <Typography display={"inline"} variant="subtitle1">
                      Lot Tersisa
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Rp 10.000/ Lot</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth>
                      Beli Sekarang
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item container xs={12} lg={6} justifyContent={"center"} alignItems={"center"}>
              <img src={coffee} alt="coffee" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Grid>
          </Grid>
          <Section subtext="Tabel Ikhtisar" heading="Sejarah Pembelian Komoditas" />
          <MainTable data={rows} headers={["Komoditas", "Jumlah Slot", "Harga Total", "Tanggal Pembelian", "Periode Kontrak", "Kupon Terkumpul"]} />
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}

export default Commodity;
