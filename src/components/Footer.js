    import React from 'react';
    import Integrasia from '../assets/image/Asset 2@2x.png';
    import Twitter from '../assets/image/1.png';
    import Facebook from '../assets/image/2.png';
    import Instagram from '../assets/image/3.png';
    import Git from '../assets/image/4.png';

    const menus = ["Home", "Service", "Price", "About", "Contact", "Demo"];

export default function Footer() {
  return (
    <footer style={{ paddingTop: '24px' }}>
      <div className='bg bg-color-primary' style={{ backgroundColor: '#559FF8', width: '100%', height: '150px', display: 'flex', alignItems: 'center' }}>
        <div className="container mx-auto grid grid-cols-3 items-center" style={{ height: '100%', paddingLeft: '20px' }}>
          <img src={Integrasia} alt="Gambar" style={{ width: '139px', height: '47px', marginRight: '20px' }} />
          <div>
            <ul className="flex flex-row justify-center space-x-10 type text-semibold" style={{ listStyleType: "none", margin: 0, padding: 0, color: "#FFFFFF", display: "flex" }}>
              {menus.map((val, index) => (
                <li key={index} style={{ color: "#FFFFFF", fontSize: "20px", marginRight: "10px" }}>{val}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-row justify-center">
              <li><img src={Twitter} alt="Twitter" style={{ width: '30px', height: '30px', marginLeft: "250px", marginRight: 10 }} /></li>
              <li><img src={Facebook} alt="Facebook" style={{ width: '30px', height: '30px', marginRight: 10 }} /></li>
              <li><img src={Instagram} alt="Instagram" style={{ width: '30px', height: '30px', marginRight: 10 }} /></li>
              <li><img src={Git} alt="Git" style={{ width: '30px', height: '30px', marginRight: 10 }} /></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', backgroundColor: '#559FF8', color: '#FFFFFF', padding: '10px', fontSize:'12px' }}>
        <p>&copy; Copyright 2022, All Rights Reserved by PT. Integrasia Utama </p>
      </div>
    </footer>
  );
}
