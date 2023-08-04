import React, { useState } from 'react';
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, IconButton, Input, Typography } from "@mui/material";
import "../assets/css/Login.css"

import image1 from "../assets/image/regis2@1.png";
import image2 from "../assets/image/regis3@2.png";
import image3 from "../assets/image/regis4@3.png";
import line2 from "../assets/image/line2.png";
import image4 from "../assets/image/regis4.png";
import button from "../assets/image/ButtonRegis.png";


const Register1 = () => {
    const images = [
        { url: image1, description: "Register Individual Account!", color: 'green' },
        { url: line2, description: ".", color:'white'  },
        { url: image2, description: "Complete Your Profile!", color: 'green' },
        { url: line2, description: ".", color:'white'  },
        { url: image3, description: "Complete Your Profile!", color: 'green' },
    ];

    const navigate = useNavigate();

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
                                <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                                    <img src={image.url} alt={image.description} style={image.url === line2 ? {height: "5px"} : { height: "55px", width: "55px" }} />
                                    <p style={{color: image.color, textAlign: 'center', whiteSpace: 'nowrap'}}>{image.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img src={image4} alt='description' style={{ width: '400px' }} />
                    </div>
                    <Box component="div" sx={{ width: "450px", mx: "auto" }}>
                        <Typography fontSize="30px" fontWeight="bold" style={{ textAlign: 'center' }}>
                            Successful registration!
                        </Typography>
                        <Typography style={{ fontSize: "19px", color: '#777B7E', textAlign: 'center'}} variant="h5">
                            The first step to an extraordinary experience with us.
                        </Typography>
                        <Button style={{ color: 'red', width:'450px', height: '60px', marginTop: '20px', border: '1px solid', borderRadius: '10px', textTransform: 'none', fontSize: '17px' }}>
                            <span><img src={button} alt='description' style={{ marginRight: '10px' }}/></span>
                            let's explore!
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Register1;
