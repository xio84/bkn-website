import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";

// Components
// import PropertyList from "../components/marketplace/Property";
// import HistorySummary from "../../components/surveyor/HistorySummary";

import indo from "../assets/Temp.png";

// Components
import Header from "../components/Header";
import Section from "../components/Section";
import MainTable from "../components/Table";
import Footer from "../components/Footer";
import { CenterFocusStrong, Group } from "@mui/icons-material";

// Assets
import bknLogo from "../assets/NewLogo.png";
import contactUs1 from "../assets/ContactUs1.pdf";
import contactUs2 from "../assets/ContactUs2.png";
import icon from "../assets/Icon.png";
import map from "../assets/Group.png";

// const primary = purple[500]; // #f44336

export default function Contact(props) {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     minHeight: '100vh',
    //     backgroundColor: primary,
    //   }}
    // >
    //   <Typography variant="h1" style={{ color: 'white' }}>
    //     404
    //   </Typography>
    //   <Typography variant="h6" style={{ color: 'white' }}>
    //     About page is still WIP
    //   </Typography>
    //   <Button href='/' variant="contained">Back Home</Button>
    // </Box>
    <main>
      <Header {...props} activeContent="Kontak Kami" />
      <Container maxWidth="lg">
        <Box>
          <Stack>
            <Grid>
              <img src={contactUs1} alt="" style={{ maxWidth: "100%" }} />
            </Grid>
            <Typography variant="h2" align="center" lineHeight={2}>
              Apa itu Token Komoditi Nusantara?
            </Typography>
            <Typography variant="AboutSubTopic" align="center" lineHeight={2}>
              Token Komoditi Nusantara merupakan tokenisasi Sistem Resi Gudang dalam harga pecahan yang terjangkau bagi investor masyarakat Indonesia yang ingin berpartisipasi aktif membantu petani majukan Indonesia.
            </Typography>
            <br />
            <Grid>
              <Container maxWidth="lg">
                <Grid item xs={0} md={6}>
                  <Box component={"img"} src={icon} alt="" display={{ xs: "none", md: "block" }} style={{ float: "left", maxWidth: "100%", maxHeight: "100%", paddingTop: "55px" }} />
                </Grid>
                <Typography align="left" textDecoration="unset" variant="h2" paddingLeft={35} paddingTop={10}>
                  Sekilas mengenai Sistem Resi Gudang
                </Typography>
                <Typography variant="AboutSubTopic" align="justify" paragraph lineHeight={2} paddingLeft={35}>
                  Resi gudang adalah dokumen atau surat bukti kepemilikan barang yang disimpan di gudang dan yang diterbitkan oleh pengelola gudang. Sistem ini biasa dimanfaatkan para petani dan kelompok tani sebagai instrumen tunda jual
                  dan pembiayaan perdagangan. Melalui Sistem Resi Gudang, para petani dapat menyimpan komoditas hasil panen ketika harga rendah untuk kemudian dijual di hari kemudian dengan harga tinggi sehingga petani dapat memiliki daya
                  tawar yang kuat. Hingga saat ini sudah ada 123 gudang komoditas yang mendapat persetujuan dari Bappebti yang tersebar di 106 Kabupaten/Kota.
                </Typography>
              </Container>
            </Grid>
            <Grid>
              <img src={contactUs2} alt="" style={{ maxWidth: "100%", paddingTop: "50px" }} />
            </Grid>
            <Grid>
              <img src={map} alt="" style={{ maxWidth: "100%", paddingTop: "50px" }} />
            </Grid>

            <Stack spacing={2}></Stack>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </main>
  );
}
