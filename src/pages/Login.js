import { ArrowBack} from "@mui/icons-material";
import { Box, Button, FormControl, Grid, IconButton, Input, InputLabel, Link, Typography } from "@mui/material";
import React from "react";
import "./Login.css"

const Login = () => {
  const BackButton=()=>{
    const handleBackClcik={};
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ email: data.get("email"), password: data.get("password") });
  };

  return (
    <div>
      <IconButton onClick={("")}>
          <ArrowBack style={{ fontSize: '35px' }}/>
          <span style={{ fontSize: '20px' }}>Back</span>
        </IconButton>
    <Box component="div" sx={{ mt: 18, width: "400px", mx: "auto" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography
          inline
          component="span"
          variant="h4"
          color="#333333"
          fontWeight="bold"
        >
          OS
        </Typography>
        <Typography
          inline
          component="span"
          variant="h4"
          color="#D8100B"
          fontWeight="bold"
        >
          PRO
        </Typography>
      </Box>
      <Typography component="h1" variant="h5" fontWeight="bold">
        Wellcome Back
      </Typography>
      <Typography
        style={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.7)" }}
        variant="h5"
      >
        Wellcome back! Please enter your detail
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormControl fullWidth>
          <label htmlFor="name"> Email </label>
          <Input name="email" id="email" type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl fullWidth sx={{ my: 2 }}>
          <label fontWeight="bold"> Password </label>
          <Input name="password" id="password" type="password" placeholder="********" />
        </FormControl>
        <Box
          type="bbox"
          component="div"
          display="flex"
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          <div className="card-button">
            <Button type="login" variant="contained" sx={{ borderRadius: 20 }}>
              Log in
            </Button>
          </div>
        </Box>
        <div className="bawah">
          <Grid item>
          <h>Dont have an account? </h>
            <Link href="#" variant="body2" >
              <h style={{color:'red'}}>Register</h>
            </Link>
          </Grid>
        </div>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          Copyright
        </Typography>
      </Box>
    </Box>
    </div>
  );
};

export default Login;
