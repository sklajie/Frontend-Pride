import React from 'react';
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import image1 from "../assets/image/regis1@1.png";
import image2 from "../assets/image/regis1@2.png";
import image3 from "../assets/image/regis1@3.png";
import line1 from "../assets/image/line1.png";

export default function ImageProfile() {
    const images = [
        { url: image1, description: "Register Individual Account!", color: 'blue' },
        { url: line1 },
        { url: image2, description: "Complete Your Profile!", color: 'black' },
        { url: line1 },
        { url: image3, description: "Complete Your Profile!", color: 'black' },
    ];

    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: "30px", marginLeft: '20px' }}>
            <IconButton onClick={() => navigate('/login')}>
                <ArrowBack style={{ fontSize: '35px' }}/>
                <span style={{ fontSize: '20px' }}>Back</span>
            </IconButton>

            <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {images.map((image, index) => (
                    <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px'}}>
                        <img src={image.url} alt={image.description} style={{ height: "55px", width: "55px" }} />
                        <p style={{color: image.color, textAlign: 'center'}}>{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}