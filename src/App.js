import IconLaslesVpn from "./assets/Logo.png";
import Ilustration1 from "./assets/Illustration_1.png";
import Global from "./assets/Huge_Global.png";
import Netflix from "./assets/sosmed/Netflix.png";
import Spotify from "./assets/sosmed/Spotify.png";
import Discord from "./assets/sosmed/Discord.png";
import reddit from "./assets/sosmed/reddit.png";
import Facebook from "./assets/sosmed/Facebook.png";
import Instagram from "./assets/sosmed/Instagram.png";
import Twitter from "./assets/sosmed/Twitter.png";
import Asset from "./assets/image/Asset 1@2x.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPlan from "./components/CardPlan";
import Review from "./components/Review";
import TitleDesc from "./components/TitleDesc";
import SubscribeNow from "./components/SubscribeNow";

function App() {
  const menus = ["Home", "Feature", "Price", "Demo", "About Us"];

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
      price: "$25 / Month",
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
      price: "$100 / Month",
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
      price: "$150 / Month",
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

  const sosmed = [Discord, reddit, Netflix, Spotify];

  return (
    
    <div className="bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36">
      <h1 className="font-bold text-4xl pb-5">OS<span style={{ color: "red" }}>PRO</span></h1>
        <div className="flex-1">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center ">
          <button className="border rounded-md bg-red-500 text-white py-1 px-6">
            Login
          </button>
        </div>
    </header>
      <main>
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
          <div>
            <h1 className="font-bold text-5xl pb-2">
              Project Control At One
            </h1>
            <h1 className="font-bold font-color-red text-5xl pb-5" style={{ color: "red" }}>
              Finger Touch
            </h1>
            <div className="font-normal text-xm pb-12">
              Present the reality of the project field an o complete and
              comprehensive Management Tool platform
            </div>
            <button className="py-1 px-20 bg-red-500 rounded-md text-white drop-shadow-3xl">
              Register
            </button>
          </div>
          <div>
            <img src={Ilustration1} alt="ilustration-laslesvpn" />
          </div>
        </div>

        <div className="bg-gray-50 py-24">
          <TitleDesc
            titlegrad={"Our Feature"}
            desc={`Special feature create crate just for you, you can manage your plan and
                  task better and faster than using other app`}
          />

          <div className=" container max-w-5xl mx-auto grid grid-cols-4 space-x-3">
            {plans.map((val, index) => {
              return (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                />
              );
            })}
          </div>
        </div>
          
        <div className="bg-gray-50 py-24">
          <TitleDesc
            title={"Powerful features for"}
            title2={"powerful businesses"}
            desc={`choose a plan that's right for you`}
          />

          <div className=" container max-w-5xl mx-auto grid grid-cols-4 space-x-3">
            {plans.map((val, index) => {
              return (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                />
              );
            })}
          </div>

          <div className="bg-gray-50 py-24">  
            <TitleDesc
              title={
                <h1>
                  Schedule a <span style={{ color: "red" }}>Demo</span>
                </h1>
              }
              desc={`Start your project with a ospro`}
            />
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

          <div className="container max-w-5xl mx-auto py-24">
            <TitleDesc
              title={" Huge Global Network of Fast VPN"}
              desc={` See LaslesVPN everywhere to make it easier for you when you move locations.`}
            />

            <img src={Global} alt={"Global"} className="my-20" />
            <div className="flex flex-row justify-center">
              {sosmed.map((val, index) => (
                <img key={index} src={val} className="w-44 h-14" alt={val} />
              ))}
            </div>
          </div>

          <Review />
        </div>
        <div className="bg-gray-100">
          <SubscribeNow />
        </div>
      </main>
      <footer className="bg-gray-100 py-20">
        <div className="container mx-auto max-w-5xl flex flex-row  space-x-24">
          <div className="flex-1 space-y-5">
            <img src={IconLaslesVpn} alt="logo lasles vpn" className="w-36" />
            <div>
              LaslesVPN is a private virtual network that <br />
              has unique features and has high security.
            </div>
            <div className="flex flex-row">
              <img src={Facebook} alt="facebook icon" className="w-16 h-16" />
              <img src={Twitter} alt="twitter icon" className="w-16 h-16" />
              <img src={Instagram} alt="IG icon" className="w-16 h-16" />
            </div>
            <div>©2020LaslesVPN</div>
          </div>
          <div className="">
            <div className="text-lg font-semibold mb-6">Product</div>
            <ul className="space-y-6 text-sm text-gray-500">
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Engage</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>LaslesVPN ? </li>
              <li>FAQ</li>
              <li>Tutorials</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Earn Money</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
