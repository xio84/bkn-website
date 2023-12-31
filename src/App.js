import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Marketplace
import Home from "./pages/Index";
// import MarketplaceDetail from "./pages/marketplace/Detail";
// import MarketplaceAuction from "../tmp/Auction";
// import MarketplaceAuctionDetail from "./pages/marketplace/AuctionDetail";

// Components
import Footer from "./components/Footer";

// Custom CSS
import './App.css'
import Commodity from "./pages/Commodity";
import Error from './pages/404';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: "#243a72",
            fontFamily: '"Syne", Helvetica',
            fontSize: 16,
            fontWeight: 700,
            lineHeight: "normal",
            borderRadius: 5,
            textTransform: "none",
            // height: '3rem',
            // width: '10rem',
            maxHeight: "100%",
            maxWidth: "100%",
            },
          },
        {
          props: { variant: 'outlined' },
          style: {
            color: '#243a72',
            borderRadius: '0.313rem',
            // height: '3rem',
            // width: '10rem',
            fontFamily: '"Syne", Helvetica',
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: '-0.03rem',
            textTransform: 'none',
            textDecoration: 'none',
            maxHeight: "100%",
            maxWidth: "100%",
          }
        }
      ]
    }
  },
  typography: {
    fontFamily: `"Syne", "Montserrat", monospace`,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    letterSpacing: -1,
    h1: {
      color: "#243a72",
      fontFamily: "Syne",
      fontSize: 45,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      color : "#003E69",
      textDecoration : "unset",
      fontFamily : "Syne",
      fontSize : 30,
      fontWeight : 700,
    },
    h3 : {
      color: "#243a72",
      fontFamily: '"Syne", Helvetica',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: 0,
    },
    h4 : {
      color: "#000000",
      fontFamily: '"Syne", Helvetica',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: "normal",
    },
    body1: {
      color: "#303030",
      fontFamily: '"Montserrat", Helvetica',
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1
    },
    body2: {
      color: "#000000",
      fontFamily: '"Montserrat", Helvetica',
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "normal",
    },
    subtitle1: {
      color: "#00000080",
      fontFamily: '"Montserrat", Helvetica',
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "normal",
    }
  },
});

const paths = [
  {
    "pathName" : "Home",
    "path" : "/"
  },{
    "pathName" : "Collections",
    "path" : "/commodity"
  },{
    "pathName" : "About Us",
    "path" : "/about"
  },{
    "pathName" : "Contact Us",
    "path" : "/contact"
  }
]

export default function BasicTabs() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home paths={paths}/>} exact></Route>
          <Route
            path="/commodity"
            element={<Commodity paths={paths}/>}
          ></Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
