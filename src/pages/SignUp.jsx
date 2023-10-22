import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { KeyOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Copyright from "../components/Copyright";
// import { makeStyles } from "@mui/material/styles";
// import users from "./../../data/users";
// import image from "./Images/image.jpg";
// import authService from "./../service/authService";


export default function SignUp(props) {

  // if(authService.isLoggedIn()){

  //   props.history.push("./home");

  // }

  const [account, setAccount] = React.useState({username:"",password:""});

  const handleAccount = (property,event)=>{

    const accountCopy = {...account};
    accountCopy[property] = event.target.value;

    setAccount(accountCopy);

  }

  const isVarifiedUser=(username, password)=>{

    // return users.find((user)=> user.username === username && user.password === password);
    return undefined
  };


  const handleLogin = ()=>{
      // if(isVarifiedUser(account.username,account.password)){
      //   authService.doLogIn(account.username);
      //   setAccount({username:"",password:""});
      //   props.history.push("/home");

      // }
  };

  return (
    <Grid container component="main" sx={{
      height: "100vh",
      // backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <CssBaseline />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={1}
        square
      >
      <Link href="/">Kembali ke halaman utama</Link>
        <Box sx={{
    margin: [2, 6],
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
          <Avatar sx={{
    margin: 0,
    // backgroundColor: theme.palette.secondary.main
  }}>
            <KeyOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Buat Akun
          </Typography>
          <Box component="form" sx={{
    width: "100%", // Fix IE 11 issue.
    marginTop: 1
  }} noValidate>
            <TextField
            onChange={(event)=>handleAccount("email",event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
            />
            <TextField
            onChange={(event)=>handleAccount("password",event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
            onChange={(event)=>handleAccount("name",event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nama"
              name="name"
              autoFocus
            />
            <TextField
            onChange={(event)=>handleAccount("numphone",event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="numphone"
              label="No. Telpon"
              name="numphone"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                margin: [3, 0, 2]
              }}
              onClick = {handleLogin}
            >
              Daftar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Sudah punya akun? Masuk sekarang!"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}