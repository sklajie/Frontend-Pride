import React, { useState } from 'react';
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, IconButton, Typography, } from "@mui/material";
import "../assets/css/Login.css"

import image1 from "../assets/image/regis1@1.png";
import image2 from "../assets/image/regis1@2.png";
import image3 from "../assets/image/regis1@3.png";
import line1 from "../assets/image/line1.png";


const Register1 = () => {
    const images = [
        { url: image1, description: "Register Individual Account!", color: 'blue'},
        { url: line1, description: ".", color:'white' },
        { url: image2, description: "Complete Your Profile!", color: 'black' },
        { url: line1, description: ".", color:'white' },
        { url: image3, description: "Complete Your Profile!", color: 'black' },
    ];

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeToTerms: false
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
        ...formState,
        [name]: name === 'agreeToTerms' ? event.target.checked : value
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div>
            <div className="containerStyle">
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                    <IconButton  onClick={() => navigate('/')}>
                        <ArrowBack style={{ fontSize: '35px' }}/>
                        <span style={{ fontSize: '20px' }}>Back</span>
                    </IconButton>
                    <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        {images.map((image, index) => (
                            <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                                <img src={image.url} alt={image.description}  style={image.url === line1 ? {height: "5px"} : { height: "55px", width: "55px" }} />
                                <p style={{color: image.color, whiteSpace: 'nowrap'}}>{image.description}</p>
                            </div>
                            
                        ))}
                        
                    </div>
                    </div>
                    <Box component="div" sx={{ mt: 10, width: "450px", mx: "auto" }}>
                        <Typography fontSize="30px" fontWeight="bold">
                            Register Individual Account!
                        </Typography>
                        <Typography style={{ fontSize: "18px", color: '#777B7E' }} variant="h5">
                            For the purpose of industry regulation, your details are required.
                        </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <FormControl fullWidth>
                                <label htmlFor="name" style={{color: "rgba(0, 0, 0, 0.7)", fontSize: '17px', textDecoration: 'none'}}> 
                                    Your fullname*
                                </label>
                                <input name="email" id="email" type="email" placeholder="Enter your email" style={{
                                border: '1px solid gray', borderRadius: '10px', height: '60px', paddingLeft: '10px'}} />
                                </FormControl>
                                <FormControl fullWidth>
                                <label htmlFor="name" style={{color: "rgba(0, 0, 0, 0.7)",fontSize: '17px', textDecoration: 'none'}}> 
                                    Email address*
                                </label>
                                <input name="email" id="email" type="email" placeholder="Enter email address" style={{
                                border: '1px solid gray', borderRadius: '10px', height: '60px', paddingLeft: '10px'}} />
                                </FormControl>
                                <FormControl fullWidth >
                                <label fontWeight="bold" style={{color: "rgba(0, 0, 0, 0.7)",fontSize: '17px', textDecoration: 'none'}}>
                                    Create password* 
                                </label>
                                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid gray', borderRadius: '10px', height: '60px' }}>
                                    <input 
                                        name="password" 
                                        id="password" 
                                        type={values.showPassword ? 'text' : 'password'} 
                                        onChange={handlePasswordChange('password')} 
                                        placeholder="Enter password"
                                        style={{ borderLeft: '1px solid gray', borderRadius: '10px', height: '55px', flex: 1, paddingLeft: '10px',}}
                                    />
                                    <button 
                                        onClick={handleClickShowPassword}
                                        style={{ background: 'none', border: 'none',  }}
                                    >
                                        {values.showPassword ? "UnShow" : "Show"}
                                    </button>
                                    </div>

                                </FormControl>
                                <label style={{ color: "rgba(0, 0, 0, 0.7)" }}>
                                    <input type="checkbox" name="agreeToTerms" onChange={handleInputChange} style={{ marginRight: '10px' }} /> 
                                    I agree to terms & conditions
                                </label>
                                <Box
                                type="bbox"
                                component="div"
                                display="flex"
                                justifyContent="center"
                                >
                                <div className="card-button">
                                    <Button onClick={() => navigate('/register2')} type="login" style={{ width:'450px', height: '60px', borderRadius: '10px', textTransform: 'none', fontSize: '17px' }}>
                                    Register Account
                                    </Button>
                                </div>
                                </Box>
                            </Box>
                        </Box>
                </div>
            </div>
        </div>
    );
}

export default Register1;
