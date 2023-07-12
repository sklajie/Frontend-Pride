import React from 'react';
import Login from './pages/Login';
import Gambar from "./assets/image/OSPRO.jpg";
import "./App.css";
import "./pages/Registrasi"

const LoginPage = () => {
  return (
    <div className="container">
      <div className="bagian-kiri">
        <img src={Gambar} alt="Deskripsi gambar" className="responsive-image" />
      </div>
      <div className="bagian-kanan">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
