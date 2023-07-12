import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import './Registrasi.css'
import Logo from "../assets/image/LogoOspro.png"

function Registrasi() {
  const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      cname: "",
      title: "",
      bmail: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData); // Lakukan pengolahan data atau pengiriman ke server di sini
    };

    return (
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <br />
            <img src={Logo} style={{width:"138px", height:"29px"}}/>
          <div>
            <label htmlFor="name">Your fullname</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="cname">Company Name</label>
            <br />
            <input
              type="cname"
              id="cname"
              name="cname"
              value={formData.cname}
              onChange={handleChange}
              placeholder="Please enter company name"
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="title"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your role"
            />
          </div>
          <div>
            <label htmlFor="bmail">Business Email</label>
            <br />
            <input
              type="bmail"
              id="bmail"
              name="bmail"
              value={formData.bmail}
              onChange={handleChange}
              placeholder="Enter email address"
            />
          </div>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Ingatkan Saya"
          /> */}
            <center>
            <button type="submit">
              <Box>Request a Demo</Box>
            </button>
            </center>
        </form>
      </div>
    );
  };

  return (
    <div className="card">
      <Box className="box">
        <RegistrationForm />
      </Box>
    </div>
  );
}

export default Registrasi;
