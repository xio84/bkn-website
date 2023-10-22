import React, {useState, useEffect} from "react";
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
import { getNFT } from "../service/web3";
import { useParams } from "react-router-dom";
import { getProfile } from "../service/account";

function Commodity(props) {
  const { id } = useParams()
  const [profile, setprofile ] = useState("")
  const [NFTsingular, setNFTsingular ] = useState({
    id: undefined,
    description: undefined,
          pic: undefined,
          name: undefined,
          lot: -1,
  })


  useEffect(() => {
    getNFT(id, setNFTsingular)

    let auth = window.sessionStorage.getItem("auth")
    console.log("Stored session:");
    console.log(auth);
    if (auth) {
      getProfile(auth)
      .then((res) => {
        if (res.status == 200) {
          setprofile(res.data["data"])
        }
      })
      .catch(() => {
        window.sessionStorage.removeItem("auth")
      })
    }
  }, [])

  return (
    <main>
      <Header {...props} activeContent="Collections" profile={profile} />
      <Container maxWidth="xl">
        <Stack spacing={8}>
          <Typography variant="subtitle1" align="left">
            Home &gt; Collections
          </Typography>
          <Grid container>
            <Grid item container xs={12} lg={6} justifyContent={"center"} alignItems={"center"}>
              <Box component="img" src={NFTsingular.pic} alt="NFTpic" sx={{height: 400, width: 600}} />
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
                    <Typography variant="h2">
                      {NFTsingular.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body" align="right" color="grey" textDecoration="unset" fontFamily="Montserrat" marginBottom={0} paragraph>
                      {NFTsingular["saleend"] == undefined ? new Date(Date.now()).toLocaleDateString() : new Date(NFTsingular["saleend"]).toLocaleDateString()}
                    </Typography>
                  </Grid>
                </Grid>
                <Stack spacing={2}>
                  <Typography variant="subtitle1">Deskripsi</Typography>
                  <Typography variant="subtitle1">{NFTsingular.description}</Typography>
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
                      {NFTsingular.lot} Lot
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography display={"inline"} variant="h3" fontFamily={"Montserrat"} fontWeight={700} letterSpacing={-0.03} fontSize={15}>
                      Rp. 10.000,-
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
          {/* <MainTable data={rows} headers={["Komoditas", "Jumlah Slot", "Harga Total", "Tanggal Pembelian", "Periode Kontrak", "Kupon Terkumpul"]} /> */}
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}

export default Commodity;
