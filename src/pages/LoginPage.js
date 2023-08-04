import React from "react";
import Gambar from "../assets/image/Login.png";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, IconButton, Input, InputLabel, Link, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import "../assets/css/Login.css"



const TwoColumnLayout = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ email: data.get("email"), password: data.get("password") });
  };

  const navigate = useNavigate();

  return (
    <div className="containerStyle">
      <div className="leftColumnStyle">
        <img src={Gambar} alt="Deskripsi gambar" className='gambar'/>
      </div>
      <div className="rightColumnStyle">
      <IconButton  onClick={() => navigate('/')}>
          <ArrowBack style={{ fontSize: '35px', color: '#B4B5BA'}}/>
          <span style={{ fontSize: '20px', color: '#B4B5BA' }}>Back</span>
        </IconButton>
    <Box component="div" sx={{ mt: 18, width: "450px", mx: "auto" }}>
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
          height="24px"
          width="111px"
        >
          PRO
        </Typography>
      </Box>
      <Typography component="h1" variant="h5" fontWeight="bold">
        Welcome Back
      </Typography>
      <Typography
        style={{ fontSize: "14px", color: "#545454",  }}
        variant="h5"
      >
        Welcome back! Please enter your detail
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormControl fullWidth>

        <label htmlFor="name" style={{color: '#333333', fontSize: '18px'}}> Email </label>
          <Input name="email" id="email" type="email" placeholder="Enter your email" style={{
          border: '2px solid gray', borderRadius: '17px', height: '52px', weight: '419px', paddingLeft: '10px', color: '#B4B5BA', fontSize: '14px'}} />
        </FormControl>
        <FormControl fullWidth sx={{ my: 2 }}>
          <label fontWeight="bold" style={{color: '#333333', fontSize: '18px'}}> Password </label>
          <Input name="password" id="password" type="password" placeholder="********" style={{
          border: '2px solid gray', borderRadius: '17px', height: '52px', weight: '419px', paddingLeft: '10px', color: '#B4B5BA', fontSize: '14px'}}/>

          <label htmlFor="name" style={{color: 'black'}}> Email </label>
          <input name="email" id="email" type="email" placeholder="Enter your email" style={{
          border: '1px solid gray', borderRadius: '17px', height: '50px', paddingLeft: '10px'}} />
        </FormControl>
        <FormControl fullWidth sx={{ my: 2 }}>
          <label fontWeight="bold" style={{color: 'black'}}> Password </label>
          <input name="password" id="password" type="password" placeholder="********" style={{
          border: '1px solid gray', borderRadius: '17px', height: '50px', paddingLeft: '10px'}}/>

        </FormControl>
        <Box
          type="bbox"
          component="div"
          display="flex"
          justifyContent="center"
        >
          <div className="card-button">
            <Button type="login" variant="contained" style={{ width:'450px', textColor: '#FFFFFF', fontSize: '16px', height: '44px', backgroundColor: '#D8100B'}}>
              Log in
            </Button>
          </div>
        </Box>
        <div className="bawah">
          <Grid item>
          <h style={{fontSize: '14px', color: '#545454'}}>Dont have an account? </h>
            <Link href="#" variant="body2" >
              <h style={{fontSize: '14px', color:'#DE674D',}}>Register</h>
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
    </div>
  );
};

export default TwoColumnLayout;
