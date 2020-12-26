import React, { Component } from 'react';
import { Carousel, Tab, Tabs } from 'react-bootstrap';
import { Header, Grid, Container, Segment, Divider, Icon, Button, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import NavbarKeras from '../components/NavbarKeras';
import menuMakananAyam from '../lib/menuMakananAyam';
import CaraPesan from '../components/CaraPesan'
import menuMakananSapi from '../lib/menuMakananSapi';



class Tuangeun extends Component {
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
                                    <Button inverted color="green" href="/" >Tingali</Button>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header icon>
                                        <Icon name='coffee' />
                                        Inuman
                                    </Header>
                                    <Button inverted color="green" href="/inuman" >Tingali</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <br />
                    <Header as="h1" textAlign="center" style={{ color: "white", paddingBottom: "50px" }} >Makanan Kereta Rasa</Header>
                    <Tabs>
                        <Tab eventKey="chicken" title="Chicken">
                            <br /><br />
                            <Carousel>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100 container-sm" height="600px"
                                        src="https://hargamenu.net/wp-content/uploads/2018/12/Menu-dan-Harga-Twisty-KFC-Delivery-Paling-Update-2018.png"
                                        alt="Chicken Wrap"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" height="600px"
                                        src="https://pbs.twimg.com/media/ELo9TEhUYAA13-6.jpg"
                                        alt="Chicken Pasta"
                                    />
                                </Carousel.Item>
                            </Carousel>

                            {menuMakananAyam.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <br /> <br />
                                        <Card centered>
                                            <Image src={data.gambar} wrapped ui={false} />
                                            <Card.Content>
                                                <Card.Header>{data.menu}</Card.Header>
                                                <Card.Description>
                                                    Harga: {data.harga}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </div>
                                )
                            })}
                        </Tab>
                        <Tab eventKey="beef" title="Beef">
                            <br /> <br />
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" height="600px"
                                        src="https://caramembuat.id/wp-content/uploads/2019/08/cara-membuat-kebab.jpg"
                                        alt="Beef Wrap"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            {menuMakananSapi.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <br /> <br />
                                        <Card centered>
                                            <Image src={data.gambar} wrapped ui={false} />
                                            <Card.Content>
                                                <Card.Header>{data.menu}</Card.Header>
                                                <Card.Description>
                                                    Harga: {data.harga}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </div>
                                )
                            })}
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

export default Tuangeun;