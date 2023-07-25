import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
// import Login from "./pages/Login"

import Asset from "../assets/image/Asset 1@2x.png"
import Check from "../assets/image/Check.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import CardPlan from "../components/CardPlan"; 
import TitleDesc from "../components/TitleDesc";
import BigCompanies from "../components/BigCompanies";
import Footer from "../components/Footer";
import OurFeatures from "../components/OurFeature";
import Curve from "../assets/image/Curve.png";
import Absence from "../assets/image/Absence.png";
import Money from "../assets/image/Money.png";
import Vector from "../assets/image/Vector.png";
import Registrasi from "../components/Registrasi";
import Home from "../components/Home";


function App() {

  const Theme = createTheme({
    typography:{
      "fontFamily": `"Exo", "Helvetica", "Arial", "sans-serif"`,
      "fontSize" : 14,
      "fontWeightLight":  300,
      "fontWeightMedium" :  400,
      "fontWeightRegular" :  500,
      "fontWeightBold" :  700
    }
      
  })
  

  const plans = [
    {
      title: "Free",
      features: [
        "Basic Task Management",
        "Team Colaboration",
        "Basic Notifications",
        "Simple Scheduling",
      ],
      featuresx: [
        "Project Dahboard",
        "Unlimited Project",
        "Advance Project Management",
        "Aplication Integration",
      ],
      price: "$0",
      desc: "Ideal for indiviuals who need quick access to basic features", 
    },
    {
      title: "Basic",
      features: [
        "Basic Task Management",
        "Team Colaboration",
        "Basic Notifications",
        "Simple Scheduling",
        "Project Dahboard",
        "Unlimited Project",
      ],
      featuresx: [
        "Advance Project Management",
        "Aplication Integration",
      ],
      price: "$25",
      desc: "Ideal for individuals who who need advanced features and tools for cl...", 
    },
    {
      title: "Premium",
      features: [
        "Basic Task Management",
        "Team Colaboration",
        "Basic Notifications",
        "Simple Scheduling",
        "Project Dahboard",
        "Unlimited Project",
        "Advance Project Management",
        "Aplication Integration",
      ],
      featuresx: [],
      price: "$100",
      desc: "Ideal for businesses who need personalized services and securit...", 
    },
    {
      title: "Costume",
      features: [
        "Basic Task Management",
        "Team Colaboration",
        "Basic Notifications",
        "Simple Scheduling",
        "Project Dahboard",
        "Unlimited Project",
        "Advance Project Management",
        "Aplication Integration",
      ],
      featuresx: [],
      price: "$150",
      desc: "Ideal for company who need personalized services and securit...",
    },
  ];

  const features = [
    "In-Depth Understanding.",
    "Personalization",
    "Hands-on Experience",
    "Informed Decision-Making",
    "Expert Support",
    "Time and Cost Savings",
  ];


  return (

    <>

    <Navbar />
    <div className="bg-white">
      <main>
        <div className="Home">
          <Home />
        </div>

        <div id="OurFeature">
        <div className="bg-gray-50 py-10">
          <TitleDesc
            title={<h1 style={{ background: "linear-gradient(to right, #D8100B, #DE674D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Our Feature</h1>}
            desc={`Special feature create crate just for you, you can manage your plan and
                  task better and faster than using other app`}
          />

          <div className="container max-w-8xl mx-auto grid grid-cols-4 space-x-3">
            <OurFeatures title="Curve" imge={Curve} desc="Unleash your potential with Curve Services. Experience innovation, growth, and success."/>
            <OurFeatures title="Absence" imge={Absence} desc="Effortlessly manage absence with Absence Services. Simplify processes, save time, and ensure smooth operation."/>
            <OurFeatures title="Budget" imge={Money} desc="Empower your financial journey with Budget Services. Take Control, set goals, and thrive."/>
            <OurFeatures title="Gantt" imge={Vector} desc="Visualize your project's progress with Gantt Chart Services. Simplify planning, track milestone, and achive project success"/>
          </div>
          <hr className="my-3 border-gray-"></hr>
        </div>
        </div>
          

        <div className="bg-gray-50 py-10" id="CardPlan" >
          <TitleDesc
            title={<>
                    <h1>Powerful features for</h1>
                    <h1 style={{ background: "linear-gradient(to right, #DE674D, #D8100B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>powerful businesses</h1>
                  </> }
            desc={`choose a plan that's right for you`}
          />

          <div className="container max-w-7xl mx-auto grid grid-cols-4">
            {plans.map((val, index,) => {
              return (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                  
                />
              );
            })}
          </div>

        
          <div className="bg-gray-50 py-10" id="Registrasi">  
            <TitleDesc
              title={
                <h1>
                  Schedule a <span style={{ color: '#D8100B' }}>Demo</span>
                </h1>
              }
              desc={`Start your project with a ospro`}
            />

            <div className="container max-w-7xl mx-auto grid grid-cols-2  items-center " style={{ paddingRight: "110px" }}>
                <ThemeProvider theme={Theme}>
                  <Registrasi />
                </ThemeProvider>

                <div className="px-17 space-y-4 ">
                  <div className="text-sm font-normal" style={{ fontSize: "20px" }}>
                  Request a demo now and discover the incredible benefits it offers. 
                  Here are the key advantages you'll gain by requesting a demo.
                  </div>
                  {features.map((val, index) => {
                    return (
                      <div className="flex items-center space-x-3" key={index}>
                        <img
                          src={Check}
                          alt="features-check-laslesvpn"
                          className="w-6 h-6"
                          style={{ width: "34px", height: "34px" }}
                        />
                        <div className="text-xs" style={{ fontSize: "20px" }}>{val}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 py-24">  
            <TitleDesc
              title={
                <h1 className="text-bold">
                  <span style={{ color: '#D8100B' }}>Big companies</span> already use os<span style={{ color: '#D8100B' }}>pro</span>
                </h1>
              }
            />

            <BigCompanies style={{ paddingTop: "24px" }}/>
          </div>


          <div className="container max-w-7xl mx-auto grid grid-cols-2" id="AboutUs">
              <img src={Asset} style={{ width: '722px', height: '390px', paddingRight: '10px' }} alt="" />
              <div className="px-16 space-y-3" style={{ paddingTop: '90px' }}>
                <div style={{ marginLeft: '20px', marginRight: '60px' }}>
                <div className="font-bold" style={{ fontSize: '40px' }}>
                  About <span style={{ color: '#D8100B', fontWeight: 'bold' }}>Us</span>
                </div>
                <div className="text-sm font-semibold" style={{ fontSize: '16px', color: '#D8100B' }}>
                Integrasia Utama
                <span style={{ fontSize: '16px', color: '#333333' }}> is a company specializing in geospatial services and solutions. Our core focus is leveraging geospatial data
                    for a variety of industries, including transportation, logistics and resource management.
                    With over 18 years of experience, we have an in-depth understanding of the industry and strive to contribute
                    to the progress of the industry through continuous improvement and innovation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        <Footer />
        </main>
        
      </div>
      </>
  );
}

export default App;
