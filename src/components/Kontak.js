import React, { Component } from 'react';
import { Grid, Header, Icon, Image, Segment, Button } from 'semantic-ui-react'
import logo from '../view/logo1.png'
import NavbarKeras from './NavbarKeras';


class Kontak extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavbarKeras />
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' textAlign='center' style={{ color: "white" }}>
                            <Image src={logo} style={{ width: "100px" }} /> Kontak Kereta Rasa
                        </Header>
                        <Segment stacked>
                            <p>
                                <a href="https://api.whatsapp.com/send?phone=6289639247810" target="_blank" rel="noreferrer">
                                    <Icon name="whatsapp" size="big" link style={{ color: "black" }} />
                                </a>
                                    089639247810
                            </p>
                            <p>
                                <a href="https://www.instagram.com/kereta.rasa/" target="_blank" rel="noreferrer">
                                    <Icon name="instagram" size="big" link style={{ color: "black" }} />
                                </a>
                                Kereta.Rasa
                            </p>
                        </Segment>
                        <Button inverted fluid size='large' href="/">
                            Back to Home
                        </Button>

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Kontak;