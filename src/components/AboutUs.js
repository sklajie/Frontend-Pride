import { Card } from "react-bootstrap"
import Asset from "../assets/image/Asset 1@2x.png"


function AboutUs() {
    return (
        <div className="container">
            <div className="gambar" style={{ gridColumn: '1' }}>
            <img src={Asset} style={{ width: '722px', height: '390px', marginLeft: '50px' }} alt="Gambar" />
        </div>
        <div className="container max-w-4xl mx-auto grid grid-cols-2">
            <Card.Title style={{ color: '#333333', fontSize: '40px', fontWeight: 'bold' }} >
                About 
                <span style={{ color: '#D8100B', fontWeight: 'bold' }}>Us</span>
            </Card.Title>
            <Card.Text className="text-left" style={{ fontSize: '16px', color: '#D8100B' }}>
                Integrasia Utama
                <span style={{ fontSize: '16px', color: '#333333' }}> is a company specializing in geospatial services and solutions. Our core focus is leveraging geospatial data
                    for a variety of industries, including transportation, logistics and resource management.
                    With over 18 years of experience, we have an in-depth understanding of the industry and strive to contribute
                    to the progress of the industry through continuous improvement and innovation.</span>
            </Card.Text>
        </div>
        </div>
    );
}

export default AboutUs;
