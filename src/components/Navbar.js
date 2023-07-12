import React from 'react';
import Logo from "../assets/image/LogoOspro.png";

function Navbar() {
    

    const menus = ["Home", "Feature", "Price", "Demo", "About Us"];

    return (
        <nav className="navbar mx-auto flex flex-row pt-6 items-center justify-center bg-white" style={{ position: "fixed", top: 0, width: "100%" }}>
        <img src={Logo} style={{ width:"111px", height:"25px", marginLeft:"64px" }}></img>
        <div className="flex-1">
            <ul className="flex flex-row space-x-6" style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
            {menus.map((val, index) => (
                <li key={index} style={{ marginRight:"116px", color:'#333333', fontSize: "16px", }}>{val}</li>
            ))}
            </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
            <button className="border rounded-md bg-red-500 text-white" style={{ width:"73px", height:"40px", borderRadius:"5px", fontSize:"16px", marginRight:"64px" }}>
            Login
            </button>
        </div>
        </nav>

    );
}

export default Navbar;
