import React, { useState } from 'react';
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import Lock from '@mui/icons-material/Lock';
import { Box, Button, FormControl, IconButton, Input, Typography } from "@mui/material";
import "../assets/css/global.css"
// import "../assets/css/Login.css"

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
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                    <IconButton  onClick={() => navigate('/register2')} style={{ marginLeft: '35px'}}>
                        <ArrowBack style={{ fontSize: '30px', color: "rgb(192, 192, 192)" }}/>
                        <span style={{ fontSize: '15px', color: "rgb(192, 192, 192)" }}>Back</span>
                    </IconButton>
                    <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        {images.map((image, index) => (
                            <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img src={image.url} alt={image.description}  style={image.url === line2 ? {height: "5px"} : { height: "55px", width: "55px" }} />
                                <p style={{color: image.color, textAlign: 'center', whiteSpace: 'nowrap', fontSize: '12px'}}>{image.description}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                    <Box component="div" sx={{ mt: 6, width: "380px", mx: "auto" }}>
                        <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                            Complete Your Profile!
                        </div>
                        <div style={{ fontSize: "16px", color: '#777B7E', paddingBottom: '25px' }} variant="h5">
                            For the purpose of industry regulation, your details are required.
                        </div>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <FormControl fullWidth>
                                <label htmlFor="phone" style={{color: "rgb(105, 105, 105)", fontWeight: 'bold', fontSize: '14px', paddingBottom: '10px'}}> 
                                    Your experience
                                </label>
                                <input className="hoverregistrasi" name="phone" id="phone" type="phone" style={{
                                border: '1px solid gray', borderRadius: '6px', height: '100px', paddingLeft: '20px', fontSize: '12px'}} />
                                </FormControl>
                                <br/>
                                <Box
                                type="bbox"
                                component="div"
                                display="flex"
                                justifyContent="center"
                                >
                                <div>
                                    <div className="card-button">
                                        <button onClick={() => navigate('/successfulregistration')} type="login" style={{ width:'380px', height: '57px', borderRadius: '6px', textTransform: 'none', fontSize: '16px' }}>
                                        Save
                                        </button>
                                    </div>
                                    <div style={{ color: 'darkgrey', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '21px', fontSize: '11px' }}>
                                        <Lock style={{ width: '15px', height: '15px' }} /> Your Info is safely secured
                                    </div>
                                </div>
                                </Box>
                            </Box>
                        </Box>
                </div>
            </div>
    );
}

export default Register1;
