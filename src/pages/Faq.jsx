import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Section from '../components/Section';
import { ExpandMore } from '@mui/icons-material';

const data = [
]

export default function FAQ(props) {
  return (
    <Box>
      <Header {...props} activeContent="Pertanyaan Umum" />
      <Container maxWidth="lg">
        <Section subtext="FAQ" heading="Pertanyaan yang sering diajukan" />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Apa itu Token Komoditi Nusantara (TKN) dan apa manfaatnya?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <b>Token Komoditi Nusantara (TKN) merupakan tokenisasi Sistem Resi Gudang</b> dalam harga pecahan. Dengan TKN, pembiayaan komoditas yang dimiliki petani dan kelompok tani menjadi lebih mudah. Selain itu, pemilik TKN akan bisa memperoleh bunga atau yield per tahun hingga 6%.

Token Komoditi Nusantara dihadirkan oleh Kliring Berjangka Indonesia (KBI) bersama Kliring Perdagangan Berjangka Indonesia (KPBI)—sebagai salah satu Badan Usaha Milik Negara (BUMN) di Indonesia—sebagai inovasi baru pembiayaan Sistem Resi Gudang melalui Token Komoditi Nusantara (TKN). 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </Container>
      <Footer />
    </Box>
  );
}