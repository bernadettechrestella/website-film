import {Card, Container, Row, Col, Image} from "react-bootstrap"
import anya from "../assets/img/anya.jpg"
import doraemon from "../assets/img/doraemon.jpg"
import moana from "../assets/img/moana.jpg"
import spiderman from "../assets/img/spiderman.jpg"
import pengabdisetan from "../assets/img/pengabdisetan.jpg"
import sneakerella from "../assets/img/sneakerella.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={anya} alt="SPY X FAMILY Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SPY X FAMILY</Card.Title>
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
                            <Image src={doraemon} alt="Doraemon Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DORAEMON</Card.Title>
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
                            <Image src={moana} alt="Moana Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">MOANA</Card.Title>
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
                            <Image src={sneakerella} alt="Sneakerella Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SNEAKERELLA</Card.Title>
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
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={pengabdisetan} alt="Pengabdi Setan Movies" className="images"/>
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">PENGABDI SETAN</Card.Title>
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

export default Trending