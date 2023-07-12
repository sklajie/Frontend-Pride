import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import './Registrasi.css'

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
          <Box>
            <Typography
              inline
              component="span"
              variant="h4"
              color="#333333"
              fontWeight="bold"
              type
            >
              OS
            </Typography>
            <Typography
              inline
              component="poppins"
              variant="h4"
              color="#D8100B"
              fontWeight="bold"
            >
              PRO
            </Typography>
          </Box>
          <div>
            <label htmlFor="name">Your fullname</label>
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
            <input
              type="bmail"
              id="bmail"
              name="bmail"
              value={formData.bmail}
              onChange={handleChange}
              placeholder="Enter email address"
            />
          </div>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Ingatkan Saya"
          />
            <button type="submit">
              <Box>Request a Demo</Box>
            </button>
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
