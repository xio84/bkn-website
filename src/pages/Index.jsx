import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
    pic: "Coffee.png",
    name: "Biji Kopi",
    slot: 100,
    price: 100000000,
  },
  {
    pic: "Oil.png",
    name: "Minyak Goreng",
    slot: 100,
    price: 100000000,
  },
  {
    pic: "Rice.png",
    name: "Gabah",
    slot: 100,
    price: 100000000,
  },
  {
    pic: "Coffee.png",
    name: "Biji Kopi",
    slot: 100,
    price: 100000000,
  },
  {
    pic: "Oil.png",
    name: "Minyak Goreng",
    slot: 100,
    price: 100000000,
  },
  {
    pic: "Rice.png",
    name: "Gabah",
    slot: 100,
    price: 100000000,
  },
];

function createData(commodity = "", slot = 0, price = 0, date = new Date.now(), coupon = "") {
  return { commodity, slot, price, date, coupon };
}

const rows = [
  createData("#Komoditas: Gabah", 3, 1000000, new Date("2023-07-03"), "1 Kupon"),
  createData("#Komoditas: Biji Kopi", 10, 3000000, new Date("2023-05-05"), "5 Kupon"),
  createData("#Komoditas: Minyak Goreng", 5, 3800000, new Date("2022-11-01"), "3 Kupon"),
  createData("#Komoditas: Biji Kopi", 15, 4500000, new Date("2023-05-05"), "2 Kupon"),
];

function xGrid(d) {
  return (
    <Grid container justifyContent={"space-evenly"}>
      {d.map((content, index) => (
        <Grid item xs={12} md={3.5}>
          <Card>
            {/* <Stack spacing={2}> */}
            <CardMedia component={"img"} src={require(`../assets/commodities/${content.pic}`)} alt={content.name} borderRadius={3} />
            {index === 0 && (
              <Typography
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
                  borderRadius: 0.5,
                }}
              >
                Penawaran Segera Berakhir
              </Typography>
            )}
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h3">#Komoditas:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right" variant="subtitle1">
                    {content.slot} Slot
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3">{content.name}</Typography>
                </Grid>
                <Grid item paddingTop={4}>
                  <Typography variant="body2" fontWeight={400}>
                    Rp. {content.price.toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ padding: 2 }}>
              <Button variant="contained">Selengkapnya</Button>
            </CardActions>
            {/* </Stack> */}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

function splitByX(d, x) {
  let out = [];
  for (let i = 0; i < d.length; i += x) {
    out.push(xGrid(d.slice(i, i + x)));
  }
  return out;
}

function Home(props) {
  return (
    <main>
      <Header {...props} activeContent="Home" />
      <Container maxWidth="lg">
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Container maxWidth="lg">
                <Typography align="left" textDecoration="unset" variant="h1">
                  Komoditas Alami Indonesia, Satu Klik Saja!
                </Typography>
                <Typography variant="body1" align="left" paragraph>
                  KBI menghadirkan sebuah inovasi dalam eksplorasi potensi alam Indonesia dengan teknologi nft.
                </Typography>
                <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="left">
                  <Button variant="contained">Selengkapnya</Button>
                  <Button variant="outlined">Daftar Sekarang</Button>
                </Stack>
              </Container>
            </Grid>
            <Grid item xs={0} md={6}>
              <Box component={"img"} src={indo} alt="" display={{ xs: "none", md: "block" }} style={{ float: "right", maxWidth: "100%", maxHeight: "100%" }} />
            </Grid>
          </Grid>
        </Box>
        <Stack spacing={8}>
          <Section subtext="Stok Tersedia" heading="Komoditas Terbaru" />
          {/* List of collections */}
          <Carousel animation="slide" sx={{ display: { xs: "none", md: "block" } }}>
            {splitByX(data, 3)}
          </Carousel>
          <Carousel animation="slide" sx={{ display: { xs: "block", md: "none" } }}>
            {splitByX(data, 1)}
          </Carousel>
          {/* End list of collections */}
          <Section subtext="Tabel Ikhtisar" heading="Sejarah Pembelian Komoditas" />
          <MainTable data={rows} headers={["Komoditas", "Jumlah Slot", "Harga Total", "Tanggal Pembelian", "Periode Kontak", "Kupon Terkumpul"]} />
          <Contact />
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}

export default Home;
