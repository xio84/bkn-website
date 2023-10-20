import { Link, Typography } from "@mui/material";

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://blocktogo.id/">
          Blocktogo
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }