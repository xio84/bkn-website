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
          backgroundColor: '#243a72',
          borderRadius: '5px',
          height: '45px',
          width: '143px',
          color: '#ffffff',
          fontFamily: '"Syne", Helvetica',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '-0.48px',
          lineHeight: 'normal',
          whiteSpace: 'nowrap',
          textTransform: 'none'
        }
      }]
    }
  },
  typography: {
    fontFamily: `"Syne", "Montserrat", monospace`,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    letterSpacing: -1,
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
