import React, {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Components
// import PropertyList from "../components/marketplace/Property";
// import HistorySummary from "../../components/surveyor/HistorySummary";

import indo from "../assets/Temp.png";
import Typography from "@mui/material/Typography";

// Components
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Card, CardActions, CardContent, CardHeader, CardMedia, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { red } from "@mui/material/colors";
import { getData, getTx } from "../service/web3";

// Data seeders
const { ThirdwebSDK } = require("@thirdweb-dev/sdk")
const sdk = new ThirdwebSDK("mumbai", {
  clientId: "8317d98ec5583fc97675484fd1c12807",
});

function createData(commodity = "", lot = 0, price = 0, startdate = new Date.now(), enddate = new Date.now(), coupon = "") {
  return { commodity, lot, price, startdate, enddate, coupon };
}

const rows = [
  createData("#Komoditas: Gabah", 3, 1000000, new Date("2023-07-03"), new Date("2023-07-09"), "1 Kupon"),
  createData("#Komoditas: Biji Kopi", 10, 3000000, new Date("2023-05-05"), new Date("2023-07-03"), "5 Kupon"),
  createData("#Komoditas: Minyak Goreng", 5, 3800000, new Date("2022-11-01"), new Date("2023-07-03"), "3 Kupon"),
  createData("#Komoditas: Biji Kopi", 15, 4500000, new Date("2023-05-05"), new Date("2023-07-03"), "2 Kupon"),
];

function xGrid(d) {
  return (
    <Grid container justifyContent={"flex-start"} alignItems={"stretch"} spacing={1}>
      {d
        .sort((a, b) => {
          return Date.parse(a["salestart"]) - Date.parse(b["salestart"]);
        })
        .map((content, index) => {
          let start = content["salestart"] == undefined ? new Date(0) : new Date(content["salestart"]);
          let end = content["saleend"] == undefined ? new Date(0) : new Date(content["saleend"]);
          let now = new Date();
          if (Date.parse(content["saleend"]) > Date.now()) {
            let heading = content["slot"] > 5 ? (end > now.setDate(now.getDate() + 3) ? "Siap dibeli!" : "Segera tutup!") : "Segera habis!";
            return (
              <Grid item xs={6} md={3}>
                <Card>
                  {/* <Stack spacing={2}> */}
                  {/* TODO: live countdown */}
                  <CardHeader
                    title={heading}
                    titleTypographyProps={{ variant: "h2", align: "center", color: heading == "Siap dibeli!" ? "green" : "red" }}
                    subheader={start.toDateString() + " ~ " + end.toDateString()}
                    subheaderTypographyProps={{ variant: "subtitle1", align: "center" }}
                  />
                  <CardMedia component={"img"} src={content.pic} alt={content.name} />
                  <CardContent>
                    <Grid container>
                      {/* <Grid item xs={6}>
                    <Typography variant="h3">#Komoditas:</Typography>
                  </Grid> */}
                      <Grid item xs={8}>
                        <Typography variant="h3" noWrap>
                          {content.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography align="right" variant="subtitle1">
                          {content.slot} Slot
                        </Typography>
                      </Grid>
                      <Grid item paddingTop={4}>
                        <Typography variant="body2" fontWeight={400}>
                          Rp. 10.000,-
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions sx={{ padding: 2 }}>
                    <Button variant="contained">Beli Sekarang</Button>
                  </CardActions>
                  {/* </Stack> */}
                </Card>
              </Grid>
            );
          } else {
            return undefined;
          }
        })}
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
  const [NFTdata, setNFTdata ] = useState([])
  const [TXdata, setTXdata ] = useState([])

  useEffect(() => {
    getData(setNFTdata)
    getTx(setTXdata)
  }, [])
  

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
                  Bantu Petani
                </Typography>
                <Typography align="left" textDecoration="unset" variant="h1">
                  Bantu Indonesia
                </Typography>
                <Typography variant="body1" align="left" paragraph>
                  KBI menghadirkan sebuah inovasi dalam eksplorasi potensi alam Indonesia dengan teknologi nft.
                </Typography>
                <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="left">
                  <Button variant="outlined">Selengkapnya</Button>
                  <Button variant="contained">Beli Sekarang</Button>
                </Stack>
              </Container>
            </Grid>
            <Grid item xs={0} md={6}>
              <Box component={"img"} src={indo} alt="" display={{ xs: "none", md: "block" }} style={{ float: "right", maxWidth: "100%", maxHeight: "100%" }} />
            </Grid>
          </Grid>
        </Box>
        <Stack spacing={8}>
          <Section subtext="Stok Tersedia" heading="Komoditas Tersedia" />
          {/* List of collections */}
          {/* Using carousel*/}
          {/* <Carousel animation="slide" sx={{ display: { xs: "none", md: "block" } }}>
            {splitByX(data, 3)}
          </Carousel>
          <Carousel animation="slide" sx={{ display: { xs: "block", md: "none" } }}>
            {splitByX(data, 1)}
          </Carousel> */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>{xGrid(NFTdata)}</Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>{xGrid(NFTdata)}</Box>
          {/* End list of collections */}
          <Section subtext="Tabel Ikhtisar" heading="Sejarah Pembelian Komoditas" />
          <MainTable data={rows} headers={["Komoditas", "Jumlah Lot", "Harga Total", "Tanggal Mulai Kontrak", "Tanggal Selesai Kontrak", "Kupon Terkumpul"]} />
          <Contact />
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}

export default Home;
