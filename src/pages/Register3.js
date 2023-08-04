import React, { useState } from 'react';
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, IconButton, Input, Typography } from "@mui/material";
import "../assets/css/Login.css"

import image1 from "../assets/image/regis2@1.png";
import image2 from "../assets/image/regis3@2.png";
import image3 from "../assets/image/regis3@3.png";
import line2 from "../assets/image/line2.png";


const Register1 = () => {
    const images = [
        { url: image1, description: "Register Individual Account!", color: 'green' },
        { url: line2, description: ".", color:'white' },
        { url: image2, description: "Complete Your Profile!", color: 'green' },
        { url: line2, description: ".", color:'white' },
        { url: image3, description: "Complete Your Profile!", color: 'blue' },
    ];

    const navigate = useNavigate();

    const [formState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeToTerms: false
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <div>
            <div className="containerStyle">
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                    <IconButton  onClick={() => navigate('/register2')}>
                        <ArrowBack style={{ fontSize: '35px' }}/>
                        <span style={{ fontSize: '20px' }}>Back</span>
                    </IconButton>
                    <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        {images.map((image, index) => (
                            <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img src={image.url} alt={image.description}  style={image.url === line2 ? {height: "5px"} : { height: "55px", width: "55px" }} />
                                <p style={{color: image.color, textAlign: 'center', whiteSpace: 'nowrap'}}>{image.description}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                    <Box component="div" sx={{ mt: 10, width: "450px", mx: "auto" }}>
                        <Typography fontSize="30px" fontWeight="bold">
                            Complete Your Profile!
                        </Typography>
                        <Typography style={{ fontSize: "18px", color: '#777B7E'}} variant="h5">
                            For the purpose of industry regulation, your details are required.
                        </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <FormControl fullWidth>
                                <label htmlFor="phone" style={{color: "rgba(0, 0, 0, 0.7)", fontSize: '17px', textDecoration: 'none'}}> 
                                    Your experience
                                </label>
                                <input name="phone" id="phone" type="phone" style={{
                                border: '1px solid gray', borderRadius: '10px', height: '110px', paddingLeft: '10px'}} />
                                </FormControl>
                                <br/>
                                <Box
                                type="bbox"
                                component="div"
                                display="flex"
                                justifyContent="center"
                                >
                                <div className="card-button">
                                    <Button onClick={() => navigate('/successfulregistration')} type="login" style={{ width:'450px', height: '60px', borderRadius: '10px', textTransform: 'none', fontSize: '17px' }}>
                                    Save
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
