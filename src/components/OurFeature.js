import { Card, Col, Container, Row, Image } from "react-bootstrap"
import Curve from "../assets/image/curve_9210491 1.png"


export default function OurFeature() {
    return(
        <div>
            <Container>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card style={{ width: '20rem', paddingLeft: '4rem' }} >
                            <Image style={{ width: '50px', height: '50px', marginLeft: '10px' }} src={Curve} alt="" className="image"/>
                            <div className="bg-white">
                                <div className="p-2 m-1 text-dark">
                                <Card.Title style={{ color: '#D8100B', fontSize: '25px', fontFamily: 'Poppins, sans-serif' }} className="text">Curve</Card.Title>
                                <Card.Text className="text-left">
                                    Unleash your potential with Curve Services. Experience innovation, growth, and success.
                                </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}