import React from "react";
import Gambar from "./OSPRO.jpg";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Join.css";

const TwoColumnLayout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ email: data.get("email"), password: data.get("password") });
  };
  const handleBackClick = () => {};

  const handleRegisterClick = () => {};

  const handleOtherButtonClick = () => {};

  // const navigate = useNavigate();

  return (
    <div className="containerStyle">
      <div className="leftColumnStyle">
        <img src={Gambar} alt="Deskripsi gambar" className="gambar" />
      </div>
      <div className="rightColumnStyle">
        <IconButton onClick={handleBackClick}>
          <ArrowBack style={{ fontSize: "35px" }} />
          <span style={{ fontSize: "20px" }}>Back</span>
        </IconButton>
        <span style={{ margin: "180px" }} />
        <h style={{ color: "rgba(128, 128, 128, 1)" }}>
          Already have an account?{" "}
        </h>
        <Link
          href="#"
          variant="body2"
          style={{ color: "rgba(128, 128, 128, 0.5)" }}
        >
          <Button onClick={handleOtherButtonClick}>
            <h style={{ color: "red" }}>Log in</h>
          </Button>
        </Link>

        <Box component="div" sx={{ mt: 18, width: "400px", mx: "auto" }}>
          <div className="Box">
            <Typography align="center" component="h1" variant="h5" fontWeight="bold">
              Join Us!
            </Typography>
            <Typography  style={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.7)" }}
            variant="h5">
              To begin this journey, tell us what type of account you'd be opening.
            </Typography>
            <Box
              sx={{
                mt: "33px",
                width: "400px",
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            > 
              <Button
                variant="contained"
                color="primary"
                className="custom-button"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  marginBottom: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", textTransform: "none" }}
                  >
                    Personal
                  </Typography>

                  {/* Typography kedua */}
                  <Typography variant="body1" style={{ textTransform: "none" }}>
                    Personal account to manage all your activities
                  </Typography>
                </Box>
              </Button>

              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  marginBottom: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Typography pertama */}
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", textTransform: "none" }}
                  >
                    Business
                  </Typography>

                  {/* Typography kedua */}
                  <Typography variant="body1" style={{ textTransform: "none" }}>
                    Own or belong to a company, this is for you
                  </Typography>
                </Box>
              </Button>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
