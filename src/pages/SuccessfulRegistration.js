import "../assets/css/global.css"
import React, { useState } from 'react';
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, IconButton, Input, Typography } from "@mui/material";

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
                        <IconButton  onClick={() => navigate('/register2')} style={{ marginLeft: '35px' }}>
                            <ArrowBack style={{ fontSize: '30px', color: "rgb(192, 192, 192)" }}/>
                            <span style={{ fontSize: '15px', color: "rgb(192, 192, 192)" }}>Back</span>
                        </IconButton>
                        <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            {images.map((image, index) => (
                                <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                                    <img src={image.url} alt={image.description} style={image.url === line2 ? {height: "5px"} : { height: "55px", width: "55px" }} />
                                    <p style={{color: image.color, textAlign: 'center', whiteSpace: 'nowrap', fontSize: '12px'}}>{image.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%', marginTop: '20px' }}>
                        <img src={image4} alt='description' style={{ width: '385px', height: '385px' }} />
                    </div>
                    <Box component="div" sx={{ width: "450px", mx: "auto" }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '26px' }}>
                            Successful registration!
                        </div>
                        <div style={{ fontSize: "16px", color: "rgb(192, 192, 192)", textAlign: 'center'}} variant="h5">
                            The first step to an extraordinary experience with us.
                        </div>
                        <button onClick={() => navigate('/login')} style={{ 
                            color: 'red', 
                            width: '380px', 
                            height: '58px', 
                            marginTop: '20px', 
                            border: '2px solid', 
                            borderRadius: '6px', 
                            textTransform: 'none', 
                            fontSize: '16px', 
                            display: 'flex', // Menambahkan flexbox
                            alignItems: 'center', // Menengahkan konten secara vertikal
                            justifyContent: 'center', // Menengahkan konten secara horizontal
                            fontWeight: '600',
                            position: 'absolute',  // Penempatan absolut relatif terhadap halaman atau elemen pembungkus
                            top: '85%',           // 50% dari atas
                            left: '50%',          // 50% dari sisi kiri
                            transform: 'translate(-50%, -50%)'
                            }}>
                            <span>
                                <img src={button} alt='description' style={{ 
                                    height: '20px', // Anda bisa menyesuaikan ukuran gambar sesuai kebutuhan
                                    marginRight: '10px' // Memberikan jarak antara gambar dan teks
                                }}/>
                            </span>
                            let's explore!
                        </button>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Register1;
