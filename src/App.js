import Ilustration2 from "./assets/Illustration_2.png";
import Netflix from "./assets/sosmed/Netflix.png";
import Spotify from "./assets/sosmed/Spotify.png";
import Discord from "./assets/sosmed/Discord.png";
import reddit from "./assets/sosmed/reddit.png";
import Asset from "./assets/image/Asset 1@2x.png"
import Object from "./assets/image/object.png";
import Check from "./assets/Check.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import CardPlan from "./components/CardPlan";
import TitleDesc from "./components/TitleDesc";
import BigCompanies from "./components/BigCompanies";
import Footer from "./components/Footer";
import OurFeatures from "./components/OurFeature";
import Curve from "./assets/image/Curve.png";
import Absence from "./assets/image/Absence.png";
import Money from "./assets/image/Money.png";
import Vector from "./assets/image/Vector.png";

function App() {


  const plans = [
    {
      title: "Free",
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
        "Advance Project Management",
        "Aplication Integration",
      ],
      price: "$25",
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
      price: "$100",
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
      price: "$150",
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
        <div className="container mx-auto grid grid-cols-2 py-10" style={{ marginTop:"100px" }}>
          <div className="py-24" style={{ marginTop: 100 }}>
            <h1 className="font-semibold" style={{ fontSize:"64px" }}>
              Project Control At One
            </h1>
            <h1 className="font-semibold font-color-red" style={{ color: "red", fontSize:"64px", }}>
              Finger Touch
            </h1>
            <div style={{ fontSize:"20px", marginBottom:"17px", marginTop:"17px" }}>
              Present the reality of the project field an o complete and
              comprehensive Management Tool platform
            </div>
            <button className="bg-red-500 rounded-md text-white " style={{ width:"324px", height: "50px", fontSize:"20px" }}>
              Register
            </button>
          </div>
          <div>
            <img style={{marginLeft:100, height:748, width: 748, }} src={Object} alt="object" />
          </div>
        </div>

        <div className="bg-gray-50 py-10">
          <TitleDesc
            title={<h1 style={{ background: "linear-gradient(to right, #D8100B, #DE674D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Our Feature</h1>}
            desc={`Special feature create crate just for you, you can manage your plan and
                  task better and faster than using other app`}
          />

          <div className=" container max-w-8xl mx-auto grid grid-cols-4 space-x-3">
            <OurFeatures title="Curve" imge={Curve} desc="Unleash your potential with Curve Services. Experience innovation, growth, and success."/>
            <OurFeatures title="Absence" imge={Absence} desc="Effortlessly manage absence with Absence Services. Simplify processes, save time, and ensure smooth operation."/>
            <OurFeatures title="Budget" imge={Money} desc="Empower your financial journey with Budget Services. Take Control, set goals, and thrive."/>
            <OurFeatures title="Gantt" imge={Vector} desc="Visualize your project's progress with Gantt Chart Services. Simplify planning, track milestone, and achive project success"/>
          </div>
          <hr className="my-3 border-gray-"></hr>
        </div>
          
        <div className="bg-gray-50 py-10">
          <TitleDesc
            title={<>
                    <h1>Powerful features for</h1>
                    <h1 style={{ color: 'red' }}>powerful businesses</h1>
                  </> }
            desc={`choose a plan that's right for you`}
          />

          <div className=" container max-w-8xl mx-auto grid grid-cols-4 space-x-3">
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

          <div className="bg-gray-50 py-10">  
            <TitleDesc
              title={
                <h1>
                  Schedule a <span style={{ color: "red" }}>Demo</span>
                </h1>
              }
              desc={`Start your project with a ospro`}
            />

            <div className="container max-w-5xl mx-auto grid grid-cols-2  items-center ">
                <img src={Ilustration2} alt={"features-lasles-vpn"} />
                <div className="px-16 space-y-4 ">
                  <div className="font-medium text-3xl">
                    We Provide Many Features You Can Use
                  </div>
                  <div className="text-sm font-normal">
                    You can explore the features that we provide with fun and have
                    their own functions each feature.
                  </div>
                  {features.map((val, index) => {
                    return (
                      <div className="flex items-center space-x-3" key={index}>
                        <img
                          src={Check}
                          alt="features-check-laslesvpn"
                          className="w-6 h-6"
                        />
                        <div className="text-xs">{val}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 py-24">  
            <TitleDesc
              title={
                <h1>
                  <span style={{ color: "red" }}>Big companies</span> already use os<span style={{ color: "red" }}>pro</span>
                </h1>
              }
            />

            <BigCompanies />
          </div>


          <div className="container max-w-7xl mx-auto grid grid-cols-2  ">
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
