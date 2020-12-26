import React, { Component } from 'react';
import { Carousel, Container, Tabs, Tab } from 'react-bootstrap';
import { Header, Button, Grid, Icon, Segment, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import menuMinuman from '../lib/menuMinuman';
import CaraPesan from '../components/CaraPesan';
import NavbarKeras from '../components/NavbarKeras';
import Kopi from '../view/iced-coffee.jpg'
import Milky from '../view/Milky.jpg';
import Tea from '../view/Tea.jpg';



class Inuman extends Component {
    render() {
        return (
            <div>
                <NavbarKeras />
                <br />
                <Container>
                    <Segment placeholder >
                        <Grid columns={2} stackable textAlign='center' >
                            <Divider vertical>Or</Divider>
                            <Grid.Row verticalAlign='middle' >
                                <Grid.Column>
                                    <Header icon>
                                        <Icon name='home' />
                                        Halaman Awal
                                    </Header>
                                    <Button inverted color="green" href="/">
                                        Tingali
                                    </Button>
                                </Grid.Column>

                                <Grid.Column>
                                    <Header icon>
                                        <Icon name='food' />
                                        Tuangeun
                                    </Header>
                                    <Button inverted color="green" href="/tuangeun" >Tingali</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <br />
                    <Header as="h1" textAlign="center" style={{ color: "white", paddingBottom: "50px" }}>Minuman Kereta Rasa</Header>
                    <Tabs>
                        <Tab eventKey="coffee" title="Coffee">
                            <br /><br />
                            <Carousel>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100 container-sm" height="600px"
                                        src={Kopi}
                                        alt="Iced Coffee"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Tab>

                        <Tab eventKey="milky" title="Milky">
                            <br /><br />
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" height="600px"
                                        src={Milky}
                                        alt="Iced Milky"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Tab>

                        <Tab eventKey="tea" title="Tea">
                            <br /><br />
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 " height="600px"
                                        src={Tea}
                                        alt="Iced Tea"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Tab>
                    </Tabs>
                    <br /> <br />
                    <CaraPesan />
                    <br />
                </Container>
            </div>
        );
    }
}

export default Inuman;