import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Marketplace
import Marketplace from "./pages/Index";
// import MarketplaceDetail from "./pages/marketplace/Detail";
// import MarketplaceAuction from "../tmp/Auction";
// import MarketplaceAuctionDetail from "./pages/marketplace/AuctionDetail";

// Components
import Footer from "./components/Footer";

// Custom CSS
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: `"Syne", "Montserrat", monospace`,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    letterSpacing: -1,
  },
});

const contents = ["Home", "Collections", "About Us", "Contact Us"]

export default function BasicTabs() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Marketplace contents={contents}/>} exact></Route>
          {/* <Route
            path="/detail"
            element={<MarketplaceDetail />}
          ></Route>
          <Route
            path="/auction"
            element={<MarketplaceAuction />}
          ></Route>
          <Route
            path="/auction/detail"
            element={<MarketplaceAuctionDetail />}
          ></Route> */}
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}
