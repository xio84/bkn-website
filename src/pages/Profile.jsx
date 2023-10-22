import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Section from '../components/Section';
import { ExpandMore } from '@mui/icons-material';
import { getProfile } from '../service/account';
import { getAllNFT } from '../service/web3';
import { useNavigate } from 'react-router-dom';
import { TableWithAction } from '../components/Table';

const headerOrder = ['Komoditas', 'Tanggal Pembelian', 'Total Lot', 'Total Harga']
const dataOrder = [
    ['Gabah: Sumatra', new Date().toLocaleDateString(), 10, 100000]
]

const headerTX = ['Komoditas', 'Tanggal Pembelian', 'Total Lot', 'Total Harga', 'Mulai Kontrak', 'Selesai Kontrak']
const dataTX = [
    ['Gabah: Sumatra', new Date().toLocaleDateString(), 10, 100000, new Date().toLocaleDateString(), new Date().toLocaleDateString()]
]

export default function Profile(props) {
    const navigateOut = useNavigate()

    const [NFTdata, setNFTdata ] = useState([])
    const [profile, setprofile ] = useState("")
    const [TXdata, setTXdata ] = useState([])
    const [orderdata, setorderdata ] = useState([])

    useEffect(() => {
        getAllNFT(setNFTdata)

        let auth = window.sessionStorage.getItem("auth")
        console.log("Stored session:");
        console.log(auth);
        if (auth) {
        getProfile(auth)
        .then((res) => {
            if (res.status == 200) {
                setprofile(res.data["data"])
            } else {
                window.sessionStorage.removeItem("auth")
                navigateOut('/')
            }
        })
        .catch(() => {
            window.sessionStorage.removeItem("auth")
            navigateOut('/')
        })
        }
    })

  return (
    <Box>
      <Header {...props} activeContent="" profile={profile}/>
      <Container maxWidth="lg">
        <Section subtext="Selesaikan deposit order disini" heading="Sejarah Order" />
        <Box sx={{margin: 2}}>
            <TableWithAction headers={headerOrder} data={dataOrder} actions={['Deposit']} />
        </Box>
        <Section subtext="Cek kepemilikan resi disini" heading="Lot Resi Terbeli" />
        <Box sx={{margin: 2}}>
            <TableWithAction headers={headerTX} data={dataTX} actions={['Uangkan Kupon', 'Transfer']} />

        </Box>
      </Container>
      <Footer />
    </Box>
  );
}