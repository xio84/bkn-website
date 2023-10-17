import React, {useState, useEffect} from "react";
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
import { Card, CardActions, CardContent, CardHeader, CardMedia, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { red } from "@mui/material/colors";

// Data seeders
const { ThirdwebSDK } = require("@thirdweb-dev/sdk")
const data = [
  {
    pic: "Coffee.png",
    name: "Biji Kopi",
    slot: 100,
    price: 100000000,
    salestart: "2023-05-13T17:09:00+07:00",
    saleend: "2023-08-13T17:09:00+07:00",
    holdstart: "2023-09-13T17:09:00+07:00",
    holdend: "2023-12-13T17:09:00+07:00",
  },
  {
    pic: "Oil.png",
    name: "Minyak Goreng",
    slot: 100,
    price: 100000000,
    salestart: "2023-06-13T17:09:00+07:00",
    saleend: "2023-09-13T17:09:00+07:00",
    holdstart: "2023-10-13T17:09:00+07:00",
    holdend: "2024-01-13T17:09:00+07:00",
  },
  {
    pic: "Rice.png",
    name: "Gabah",
    slot: 100,
    salestart: "2023-07-13T17:09:00+07:00",
    saleend: "2023-10-13T17:09:00+07:00",
    holdstart: "2024-05-13T17:09:00+07:00",
    holdend: "2024-08-13T17:09:00+07:00",
  },
  {
    pic: "Coffee.png",
    name: "Biji Kopi",
    slot: 100,
    salestart: "2023-08-13T17:09:00+07:00",
    saleend: "2023-11-13T17:09:00+07:00",
    holdstart: "2024-05-13T17:09:00+07:00",
    holdend: "2024-08-13T17:09:00+07:00",
  },
  {
    pic: "Oil.png",
    name: "Minyak Goreng",
    slot: 100,
    salestart: "2023-12-13T17:09:00+07:00",
    saleend: "2024-08-13T17:09:00+07:00",
    holdstart: "2024-05-13T17:09:00+07:00",
    holdend: "2024-08-13T17:09:00+07:00",
  },
  {
    pic: "Rice.png",
    name: "Gabah",
    slot: 100,
    salestart: "2023-05-13T17:09:00+07:00",
    saleend: "2023-10-15T17:09:00+07:00",
    holdstart: "2026-05-13T17:09:00+07:00",
    holdend: "2026-08-13T17:09:00+07:00",
  },
  {
    pic: "Oil.png",
    name: "Minyak Goreng",
    slot: 1,
    salestart: "2023-05-13T17:09:00+07:00",
    saleend: "2023-11-15T17:09:00+07:00",
    holdstart: "2026-05-13T17:09:00+07:00",
    holdend: "2026-08-13T17:09:00+07:00",
  },
];

function createData(commodity = "", lot = 0, price = 0, date = new Date.now(), coupon = "") {
  return { commodity, lot, price, date, coupon };
}

const rows = [
  createData("#Komoditas: Gabah", 3, 1000000, new Date("2023-07-03"), "1 Kupon"),
  createData("#Komoditas: Biji Kopi", 10, 3000000, new Date("2023-05-05"), "5 Kupon"),
  createData("#Komoditas: Minyak Goreng", 5, 3800000, new Date("2022-11-01"), "3 Kupon"),
  createData("#Komoditas: Biji Kopi", 15, 4500000, new Date("2023-05-05"), "2 Kupon"),
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
                  {/* {index === 0 && (
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
              )} */}
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

  function getData() {
    const sdk = new ThirdwebSDK("mumbai", {
      clientId: "8317d98ec5583fc97675484fd1c12807",
    });
  
    sdk.getContract("0xE3E8119bA6131d16D34E72f4024Fd96120858cCd")
    .then((res) => {
      console.log("Get contract success");
      res.erc1155.getOwned("0xC53290Ba22A8E800cCC43B66e517a30B921Ad9D6")
      .then((dat) => {
        console.log("Get data success");
        let newData = []
        dat.map((val) => {
          let xdata = {
            pic: val.metadata.image,
            name: val.metadata.name,
            slot: val.quantityOwned ?? 0,
          }
          if (val.metadata.attributes != undefined) {
            val.metadata.attributes.map((val) => {
              if (val.trait_type != undefined) {
                xdata[val.trait_type] = val.value
              }
            })
          }
          newData.push(xdata)
        })
        console.log(newData)
        setNFTdata(newData)
      })
      .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
  }

  useEffect(() => {
    getData()
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
          <MainTable data={rows} headers={["Komoditas", "Jumlah Slot", "Harga Total", "Tanggal Pembelian", "Periode Kontrak", "Kupon Terkumpul"]} />
          <Contact />
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}

export default Home;
