import React from 'react';
import Object from "../assets/image/object.png";
import { useNavigate } from 'react-router-dom';

const ProjectControl = () => {

    const navigate = useNavigate()

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-10 md:mx-16" id="Home">
        <div className="py-12" style={{ marginTop: 50 }}>
            <h1 className="font-semibold" style={{ fontSize:"64px", whiteSpace:"nowrap" }}>
                Project Control At One
            </h1>
            <h1 className="font-semibold" style={{ color: '#D8100B', fontSize:"64px" }}>
                Finger Touch
            </h1>
            <div style={{ fontSize:"20px", marginBottom:"10px", marginTop:"10px", color: '#333333' }}>
                Present the reality of the project field an o complete and
                comprehensive Management Tool platform
            </div>
            <button onClick={() => navigate('/joinn')} className="bg-red-500 rounded-md text-white w-full md:w-auto" style={{  width:"324px", height: "50px", fontSize:"20px", color: '#FFFFFF', backgroundColor: '#D8100B'  }}>
                Register
            </button>
        </div>
        <div className="flex justify-center md:justify-start">
            <img className="w-full md:w-auto h-auto" style={{ maxHeight:600, maxWidth: 600}} src={Object} alt="object" />
        </div>
        </div>
    );
}

export default ProjectControl;