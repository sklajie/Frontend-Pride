import React from 'react';
import Object from "../assets/image/object.png";
import { useNavigate } from 'react-router-dom';

const ProjectControl = () => {

    const navigate = useNavigate()

    return (
        <div className="container mx-auto grid grid-cols-2 py-10" id="Home" style={{ marginTop:"100px" }}>
            <div className="py-24" style={{ marginTop: 100 }}>
                <h1 className="font-semibold" style={{ fontSize:"64px" }}>
                    Project Control At One
                </h1>
                <h1 className="font-semibold font-color-red" style={{ color: '#D8100B', fontSize:"64px" }}>
                    Finger Touch
                </h1>
                <div style={{ fontSize:"20px", marginBottom:"17px", marginTop:"17px", color: '#333333' }}>
                    Present the reality of the project field an o complete and
                    comprehensive Management Tool platform
                </div>
                <button onClick={() => navigate('/register1')} className="bg-red-500 rounded-md text-white " style={{ width:"324px", height: "50px", fontSize:"20px", color: '#FFFFFF', backgroundColor: '#D8100B' }}>
                    Register
                </button>
            </div>
            <div>
                <img style={{marginLeft:100, height:748, width: 748, }} src={Object} alt="object" />
            </div>
        </div>
    );
}

export default ProjectControl;