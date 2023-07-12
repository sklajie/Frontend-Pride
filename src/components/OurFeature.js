import { Card, Col, Container, Row, Image } from "react-bootstrap"

export default function OurFeature({title, imge, desc}) {
    return(
        <div>
            <Container>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <div style={{ width: '20rem', paddingLeft: '4rem' }} >
                            <Image style={{ width: '50px', height: '50px', marginLeft: '10px' }} src={imge} alt="" className="image"/>
                            <div>
                                <div className="p-1 m-1 text-dark">
                                <Card.Title style={{ color: '#D8100B', fontSize: '25px', fontFamily: 'Poppins, sans-serif' }} className="text">{title}</Card.Title>
                                <Card.Text className="text-left" style={{ fontSize: '16px' }}>{desc}
                                </Card.Text>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}