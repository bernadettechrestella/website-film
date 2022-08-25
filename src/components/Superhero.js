import {Card, Container, Row, Col, Image} from "react-bootstrap"
import captainamerica from "../assets/img/captainamerica.jpg"
import transformers from "../assets/img/transformers.jpg"
import batman from "../assets/img/batman.jpg"
import thor from "../assets/img/thor.jpg"
import ironman from "../assets/img/ironman.jpg"
import spiderman from "../assets/img/spiderman.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={captainamerica} alt="Captain America Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={transformers} alt="Transformers Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">TRANSFORMERS</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={batman} alt="Batman Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BATMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={thor} alt="Thor Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THOR</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={ironman} alt="Iron Man Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">IRON MAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spiderman} alt="Spiderman Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SPIDERMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero