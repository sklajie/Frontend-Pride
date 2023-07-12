import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ email: data.get("email"), password: data.get("password") });
  };

  return (
    <div className="card shadow-lg">
      <Box component="div" sx={{ mt: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            inline
            component="span"
            variant="h2"
            color="#333333"
            fontWeight="bold"
          >
            OS
          </Typography>
          <Typography
            inline
            component="span"
            variant="h2"
            color="#D8100B"
            fontWeight="bold"
          >
            PRO
          </Typography>
        </Box>
        <Typography component="h1" variant="h5" fontWeight="bold">
          MASUK
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <FormControl fullWidth >
            <InputLabel htmlFor="email">Enter Your Email</InputLabel>
            <Input name="email" id="email" type="email"></Input>
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }} >
            <InputLabel htmlFor="password">********</InputLabel>
            <Input name="password" id="password" type="password"></Input>
          </FormControl>
          <Box
            type="bbox"
            component="div"
            display="flex"
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <div className="card-button">
              <Button
                type="login"
                variant="contained"
                sx={{ borderRadius: 20 }}
              >
                Log in
              </Button>
            </div>
          </Box>
          <div className="bawah">
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Register
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
