import "../assets/css/global.css"
import React, { useState } from 'react';
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, IconButton, Typography, } from "@mui/material";
// import "../assets/css/Login.css"

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
        const isCheckbox = event.target.type === 'checkbox';
        setFormState(prevState => ({
            ...prevState,
            [name]: isCheckbox ? event.target.checked : value
        }));
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
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                    <IconButton  onClick={() => navigate('/joinn')} style={{ marginLeft: '35px' }}>
                        <ArrowBack style={{ fontSize: '30px', color: "rgb(192, 192, 192)" }}/>
                        <span style={{ fontSize: '15px', color: "rgb(192, 192, 192)" }}>Back</span>
                    </IconButton>
                    <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        {images.map((image, index) => (
                            <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                                <img src={image.url} alt={image.description}  style={image.url === line1 ? {height: "5px"} : { height: "55px", width: "55px" }} />
                                <p style={{color: image.color, whiteSpace: 'nowrap', fontSize: '12px'}}>{image.description}</p>
                            </div>
                            
                        ))}
                        
                    </div>
                    </div>
                    <Box component="div" sx={{ mt: 6, width: "380px", mx: "auto" }}>
                        <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                            Register Individual Account!
                        </div>
                        <div style={{ fontSize: "16px", color: '#777B7E' }}>
                            For the purpose of industry regulation, your details are required.
                        </div>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <FormControl fullWidth>
                                <label htmlFor="name" style={{color: "rgb(105, 105, 105)", fontWeight: 'bold', fontSize: '14px', paddingBottom: '7px'}}> 
                                    Your fullname*
                                </label>
                                <input name="email" id="email" type="email" placeholder="Enter your name" style={{
                                border: '1px solid gray', borderRadius: '6px', height: '60px', paddingLeft: '20px', fontSize: '12px'}} />
                                </FormControl>
                                <FormControl fullWidth>
                                <label htmlFor="name" style={{color: "rgb(105, 105, 105)", fontWeight: 'bold', fontSize: '14px', paddingBottom: '7px'}}> 
                                    Email address*
                                </label>
                                <input name="email" id="email" type="email" placeholder="Enter email address" style={{
                                border: '1px solid gray', borderRadius: '6px', height: '60px', paddingLeft: '20px', fontSize: '12px'}} />
                                </FormControl>
                                <FormControl fullWidth >
                                <label fontWeight="bold" style={{color: "rgb(105, 105, 105)", fontWeight: 'bold', fontSize: '14px', paddingBottom: '7px'}}>
                                    Create password* 
                                </label>
                                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid gray', borderRadius: '10px', height: '60px' }}>
                                    <input 
                                        name="password" 
                                        id="password" 
                                        type={values.showPassword ? 'text' : 'password'} 
                                        onChange={handlePasswordChange('password')} 
                                        placeholder="Enter password"
                                        style={{ borderLeft: '1px solid gray', borderRadius: '6px', height: '55px', flex: 1, paddingLeft: '20px', fontSize: '12px'}}
                                    />
                                    <button 
                                        onClick={handleClickShowPassword}
                                        style={{ background: 'none', border: 'none'  }}
                                    >
                                        {values.showPassword ? "UnShow" : "Show"}
                                    </button>
                                    </div>

                                </FormControl>
                                <label style={{ color: "rgb(105, 105, 105)", fontWeight: "bold", fontSize: '14px'}}>
                                    <input type="checkbox" name="agreeToTerms" onChange={handleInputChange} value={formState.agreeToTerms} style={{ marginRight: '10px', cursor: 'pointer' }} /> 
                                    I agree to terms & conditions
                                </label>
                                <Box
                                type="bbox"
                                component="div"
                                display="flex"
                                justifyContent="center"
                                >
                                <div className="card-button">
                                    <button onClick={() => navigate('/register2')} type="login" style={{ width:'450px', height: '55px', borderRadius: '6px', textTransform: 'none', fontSize: '16px' }}>
                                    Register Account
                                    </button>
                                </div>
                                </Box>
                            </Box>
                        </Box>
                </div>
            </div>
    );
}

export default Register1;
