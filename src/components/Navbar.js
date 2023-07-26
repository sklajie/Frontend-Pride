import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/image/LogoOspro.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavigationBar = () => {
  // Fungsi untuk menangani scroll ke elemen yang sesuai dengan sedikit slide ke atas
  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 20, // Ubah angka ini untuk menyesuaikan seberapa jauh slide ke atas
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate()

  return (
    <div>
      <Navbar className="navbar mx-auto flex flex-row pt-6 items-center justify-center bg-white" style={{ position: "fixed", top: 0, width: "100%", paddingBottom:"10px", paddingTop:"10px" }}>
        <img src={Logo} style={{ width:"111px", height:"25px", marginLeft:"185px" }} alt="Logo"></img>
        <div className="flex-1">
          <Nav className="flex flex-row space-x-20" style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
            <Nav.Link className="nav-link" onClick={() => handleScroll("#Home")}>Home</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => handleScroll("#OurFeature")}>Feature</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => handleScroll("#CardPlan")}>Price</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => handleScroll("#Registrasi")}>Demo</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => handleScroll("#AboutUs")}>About Us</Nav.Link>
          </Nav>
        </div>
        <div className="space-x-6 flex flex-row items-center">
          <button onClick={() => navigate('/login')} className="border rounded-md bg-red-500 text-white" style={{ width:"73px", height:"40px", borderRadius:"5px", fontSize:"16px", marginRight:"185px", backgroundColor: '#D8100B', color: '#FFFFFF' }}>
            Login
          </button>
        </div>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
