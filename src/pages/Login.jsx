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
import { LockOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Copyright from "../components/Copyright";

import { loginPost } from "../service/account"
import { Alert, Snackbar } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Login(props) {

  // if(authService.isLoggedIn()){

  //   props.history.push("./home");

  // }

  const [account, setAccount] = React.useState({email:"",password:""});
  const [open, setState] = React.useState(false)

  const handleAccount = (property,event)=>{

    const accountCopy = {...account};
    accountCopy[property] = event.target.value;

    setAccount(accountCopy);

  }

  const isVarifiedUser=(username, password)=>{

    // return users.find((user)=> user.username === username && user.password === password);
    return undefined
  };

  const navigateOut = useNavigate()

  const handleClose = () => {
    setState(false);
  };

  const handleLogin = (event)=>{
    event.preventDefault()
    console.log("Logging in...");
    loginPost(account.email, account.password, true)
    .then((res) => {
      console.log(props);
      navigateOut('/')
    })
    .catch((err) => {
      console.log("Login error");
      console.log(err);
      setState(true)
    })
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


      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{"horizontal": "center", "vertical": "top"}}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Gagal masuk! Silahkan coba lagi
        </Alert>
      </Snackbar>

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
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Masuk Akun
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ingat Saya"
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
              Masuk
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Belum punya akun? Daftar sekarang!"}
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