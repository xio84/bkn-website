import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Assets
import bknLogo from "../assets/logo.png";
import Button from "@mui/material/Button";

export default function Header(props) {
  const { contents, activeContent } = props;

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        marginBottom: 3,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: "rgba(251, 251, 251, 1)",
        // borderBottom: "1px solid rgba(38, 38, 38, 0.1)",
      }}
    >
      <Toolbar
        style={{
          flexWrap: "wrap",
          padding: 0,
          paddingBottom: 1,
        }}
      >
        <div style={{ flexGrow: 0 }}>
          <Link href="/">
            <img src={bknLogo} alt="" width="200" />
          </Link>
        </div>
        <nav style={{ flexGrow: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
          {contents.map((content) => (
            <Link
              variant="button"
              href="/"
              sx={{
                my: 1,
                mx: 1.5,
                textTransform: "none",
                color: "#003E69",
                textDecoration: "unset",
                fontFamily: "Syne",
                fontWeight: content === activeContent ? "bold" : "normal",
              }}
            >
              {content}
            </Link>
          ))}
        </nav>
        <div style={{ flexGrow: 0 }}>
          <Link href="/">
            <Button variant="contained" sx={{
              fontFamily: "Syne",
              width: 200
            }}>Login</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
