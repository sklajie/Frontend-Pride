import React, { useState } from 'react';
import Select, { components } from "react-select";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import "../assets/css/global.css"
import { Box, Button, FormControl, IconButton, Input, Typography } from "@mui/material";
// import "../assets/css/Login.css"

import image1 from "../assets/image/regis2@1.png";
import image2 from "../assets/image/regis2@2.png";
import image3 from "../assets/image/regis1@3.png";
import line1 from "../assets/image/line1.png";
import line2 from "../assets/image/line2.png";
import indonesiaFlag from "../assets/image/Indonesia.png"
import americaFlag from "../assets/image/USA.png"


const Register1 = () => {
    const images = [
        { url: image1, description: "Register Individual Account!", color: 'green' },
        { url: line2, description: ".", color:'white' },
        { url: image2, description: "Complete Your Profile!", color: 'blue' },
        { url: line1, description: ".", color:'white' },
        { url: image3, description: "Complete Your Profile!", color: 'black' },
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

    const options = [
        {
            value: 'Indonesia',
            label: '+62',
            icon: indonesiaFlag
        },
        {
            value: 'America',
            label: '+1',
            icon: americaFlag
        }
    ];

    const formatOptionLabel = (option) => (
        <div>{option.label}</div>
    );

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            <img src={props.data.icon} alt="" width="20" style={{ marginRight: '8px' }} />
            {children}
        </components.SingleValue>
    );

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <span>⌵</span>
            </components.DropdownIndicator>
        );
    };

    const handleInput = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Menggantikan semua karakter non-angka dengan string kosong
    }

    return (
        <div>
            <div className="containerStyle">
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                    <IconButton  onClick={() => navigate('/register1')} style={{ marginLeft: '35px' }}>
                        <ArrowBack style={{ fontSize: '30px', color: "rgb(192, 192, 192)" }}/>
                        <span style={{ fontSize: '15px', color: "rgb(192, 192, 192)" }}>Back</span>
                    </IconButton>
                    <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        {images.map((image, index) => (
                            <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img src={image.url} alt={image.description}  style={image.url === line1 || image.url === line2 ? {height: "5px"} : { height: "55px", width: "55px" }} />
                                <p style={{color: image.color, textAlign: 'center', whiteSpace: 'nowrap', fontSize: '12px'}}>{image.description}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                    <Box component="div" sx={{ mt: 6, width: "380px", mx: "auto" }}>
                        <div style={{ fontWeight: 'bold', fontSize: '27px' }}>
                            Complete Your Profile!
                        </div>
                        <div style={{ fontSize: "16px", color: '#777B7E', paddingBottom: '7px' }}>
                            For the purpose of industry regulation, your details are required.
                        </div>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <FormControl fullWidth>
                                <label htmlFor="phone" style={{color: "rgb(105, 105, 105)", fontWeight: 'bold', fontSize: '14px', paddingBottom: '7px'}}> 
                                    Phone number
                                </label>
                                <div className="hoverregistrasi" style={{ display: 'flex', alignItems: 'center', border: '1px solid gray', borderRadius: '6px', height: '60px', fontSize: '12px', paddingLeft: '20px'}}>
                                    <Select 
                                        options={options}
                                        formatOptionLabel={formatOptionLabel}
                                        components={{ SingleValue, DropdownIndicator }}
                                        placeholder=""
                                        styles={{
                                            container: (provided) => ({
                                                ...provided,
                                                flex: 1,
                                            }),
                                            option: (provided) => ({
                                                ...provided,
                                                paddingLeft: '5px'
                                            }),
                                            control: (provided) => ({
                                                ...provided,
                                                height: '40px',
                                                minHeight: '40px',
                                                width: '100px',
                                                fontSize: '12px',
                                                boxShadow: 'none',
                                                borderLeft: 'none',
                                                borderColor: 'transparent',
                                                backgroundColor: 'transparent',
                                                "&:hover": {
                                                    borderColor: 'transparent'
                                                }
                                            }),
                                            singleValue: (provided) => ({
                                                ...provided,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }),
                                            valueContainer: (provided) => ({
                                                ...provided,
                                                height: '40px',
                                                padding: '0 8px',
                                            }),
                                            indicatorsContainer: (provided) => ({
                                                ...provided,
                                                height: '40px',
                                            }),
                                        }}
                                    />
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone"
                                        onInput={handleInput}
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                        style={{
                                            height: '40px',
                                            fontSize: '12px',
                                            paddingLeft: '1px',
                                            flex: 2,
                                            border: 'none',       // Menghilangkan border
                                            backgroundColor: 'transparent',  // Menghilangkan background
                                            outline: 'none'       // Menghilangkan outline saat difokuskan
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <FormControl fullWidth>
                                <label htmlFor="address" style={{color: "rgb(105, 105, 105)", fontWeight: 'bold', fontSize: '14px', paddingBottom: '7px'}}> 
                                    Your address
                                </label>
                                <input className="hoverregistrasi" name="address" id="address" type="address" placeholder="Please enter address" style={{
                                border: '1px solid gray', borderRadius: '6px', height: '60px', paddingLeft: '20px', fontSize: '12px'}}/>
                            </FormControl>
                            <FormControl fullWidth >
                                <label fontWeight="bold" style={{color: "rgb(105, 105, 105)", fontWeight: 'bold', fontSize: '14px', paddingBottom: '7px'}}>
                                    City 
                                </label>
                                <input className="hoverregistrasi" name="city" id="city" type="city" placeholder="Please input" style={{
                                border: '1px solid gray', borderRadius: '6px', height: '60px', paddingLeft: '20px', fontSize: '12px'}}/>
                            </FormControl>
                            <Box
                                type="bbox"
                                component="div"
                                display="flex"
                                justifyContent="center"
                                >
                                <div className="card-button">
                                    <button onClick={() => navigate('/register3')} type="login" style={{ width:'450px', height: '55px', borderRadius: '6px', textTransform: 'none', fontSize: '16px' }}>
                                    Save and Continue
                                    </button>
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
