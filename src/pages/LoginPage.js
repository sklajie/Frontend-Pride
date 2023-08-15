import "../assets/css/global.css"
import Gambar from "../assets/image/Login.png";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, IconButton, Input, InputLabel, Link, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../assets/css/Login.css"
import Logo from "../assets/image/LogoOspro.png";



const TwoColumnLayout = () => {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
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
          <ArrowBack style={{ fontSize: '30px' }}/>
          <span style={{ fontSize: '15px' }}>Back</span>
        </IconButton>
        <Box component="div" sx={{ mt: 8, width: "380px", mx: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={Logo} style={{ width: '100px', marginBottom: '12px' }}></img>
          </Box>
          <Typography component="h1" variant="h5" fontWeight="bold">
            Welcome Back
          </Typography>
          <Typography
            style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.7)", marginTop: '5px', marginBottom: '15px' }}
          >
            Welcome back! Please enter your detail
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <FormControl fullWidth>
              <label htmlFor="name" style={{color: 'black', fontSize: '15px'}}> Email </label>
              <input name="email" id="email" type="email" placeholder="Enter Your Email" style={{
              border: '1px solid gray', borderRadius: '15px', height: '45px', paddingLeft: '10px', fontSize: '12px'}} />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <label fontWeight="bold" style={{color: 'black', fontSize: '15px'}}> Password </label>
              <input name="password" id="password" type="password" placeholder="********" style={{
              border: '1px solid gray', borderRadius: '15px', height: '45px', paddingLeft: '10px', fontSize: '12px'}}/>
            </FormControl>
            <Box
              type="bbox"
              component="div"
              display="flex"
              justifyContent="center"
            >
              <div className="card-button" style={{ marginBottom: '15px' }}>
                <button type="login" style={{ fontSize: '14px', fontWeight: "bold" }}>
                  Log in
                </button>
              </div>
            </Box>
            <div className="bawah">
            <Grid item>
              <h style={{ fontSize: '13px', color: "rgba(0, 0, 0, 0.7)" }}>Don't have an account? </h>
              <Link 
                variant="body2" 
                onClick={() => window.location.href="/joinn"}
                style={{cursor: 'pointer', textDecoration: 'none'}}
              >
                <h style={{color:'red', fontSize: '13px' }}>Register</h>
              </Link>
            </Grid>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
