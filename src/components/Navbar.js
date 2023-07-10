import React from 'react';


function Navbar() {
    

    const menus = ["Home", "Feature", "Price", "Demo", "About Us"];

    return (
        <nav className="navbar mx-auto flex flex-row pt-6 items-center justify-center bg-white shadow-xl" style={{ position: "fixed", top: 0, marginLeft: "7.5%", width: "85%" }}>
        <h1 className="font-bold text-2xl pb-5 px-10">
            OS<span style={{ color: "red" }}>PRO</span>
        </h1>
        <div className="flex-1">
            <ul className="flex flex-row space-x-6" style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
            {menus.map((val, index) => (
                <li key={index} style={{ marginRight:"10px" }}>{val}</li>
            ))}
            </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center px-10 pb-5">
            <button className="border rounded-md bg-red-500 text-white py-2 px-4">
            Login
            </button>
        </div>
        </nav>

    );
}

export default Navbar;
