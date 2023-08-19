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
  const { paths, activeContent } = props;

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
          {paths.map((path) => (
            <Link
              variant="button"
              href={path.path}
              sx={{
                my: 1,
                mx: 1.5,
                textTransform: "none",
                color: path.pathName === activeContent ? "#003E69" : "#3030303C",
                textDecoration: "unset",
                fontFamily: "Syne",
                fontWeight: path.pathName === activeContent ? "bold" : "normal",
              }}
            >
              {path.pathName}
            </Link>
          ))}
        </nav>
        <div style={{ flexGrow: 0 }}>
          <Link href="/">
            <Button variant="contained">Login</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
