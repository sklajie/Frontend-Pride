import React from "react";
import Gambar from "../assets/image/Login.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Person from "../assets/image/person.png"
import Bussiness from "../assets/image/bussiness.png"
// import { useEffect } from 'react';
import "../assets/css/global.css"

const TwoColumnLayout = () => {

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({ email: data.get("email"), password: data.get("password") });
  // };

  const navigate = useNavigate();

  return (
    <div className="containerStyle">
      <div className="leftColumnStyle">
        <img src={Gambar} alt="Deskripsi gambar" className="gambar" />
      </div>
      <div className="rightColumnStyle">
      <IconButton  onClick={() => navigate('/login')}>
          <ArrowBack style={{ fontSize: '30px' }}/>
          <span style={{ fontSize: '15px' }}>Back</span>
        </IconButton>
        <span style={{ margin: "110px" }} />
        <h style={{ color: "rgba(128, 128, 128, 1)", fontSize: '15px' }}>
          Already have an account?{" "}
        </h>
        <Link
          href="#"
          variant="body2"
          style={{ color: "rgba(128, 128, 128, 0.5)", fontStyle: 'Poppins' }}
        >
          <button onClick={() => navigate('/login')}>
            <h style={{ color: "red", fontSize: '15px' }}>Log in</h>
          </button>
        </Link>

        <Box component="div" sx={{ mt: 10, width: "400px", mx: "auto" }}>
          <div className="Box">
            <div style={{width: '360px', display: 'grid', paddingLeft: '40px' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', paddingBottom: '14px', textAlign: 'center' }}>
                Join Us!
              </div>
              <div  style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.7)" }}>
                To begin this journey, tell us what type of account you'd be opening.
              </div>
            </div>
            <Box
              sx={{
                mt: "33px",
                width: "380px",
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            > 
              <Button
                variant="contained"
                className="custombutton"
                style={{
                  marginBottom: "10px",
                  alignItems:"left"
                }}
                href="/register1"
              >
                <box style={{margin:"10px", display: 'flex', alignItems: 'center' }}>
                <div className="gmbr" style={{ marginRight:"20px", border:"1.5px solid #559FF8", borderRadius:"5px"  }}>
                    <img src={Person} alt="person" style={{height: '15px', width: '15px', margin: '10px', marginRight:"18px" }}></img>
                    </div>
                    
                    <div>
                        <div style={{color:"black", fontWeight: "bold", textTransform: "none", fontSize: '15px', fontFamily: "Poppins"}}>
                            Personal
                        </div>

                        {/* Typography kedua */}
                        <div style={{color:"gray", textTransform: "none", fontFamily: "Poppins", fontSize: '12px' }}>
                            Personal account to manage all your activities.
                        </div>
                    </div>
                    <ArrowForward style={{ color:"white", fontSize: '20px' }}/>
                </box>

              </Button>

              <Button
                variant="contained"
                className="custombutton"
                style={{
                  marginBottom: "10px",
                  alignItems:"left"
                }}
              >
                <box style={{margin:"10px", display: 'flex', alignItems: 'center' }}>

                    <div className="gmbr" style={{ marginRight:"20px", border:"1.5px solid #559FF8", borderRadius:"5px"  }}>
                    <img src={Bussiness} alt="bussiness" style={{height: '15px', width: '15px', margin: '10px', marginRight:"15px" }}></img>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                        {/* Typography pertama */}
                        <div style={{color:"black", fontWeight: "bold", textTransform: "none", fontSize: '15px', fontFamily: "Poppins"}}>
                            Business
                        </div>

                        {/* Typography kedua */}
                        <div style={{color:"gray", textTransform: "none", fontFamily: "Poppins", fontSize: '12px' }}>
                            Own or belong to a company, this is for you.
                        </div>
                    </div>
                    <ArrowForward style={{color:"white", fontSize: '20px' }}/>
                </box>

              </Button>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
