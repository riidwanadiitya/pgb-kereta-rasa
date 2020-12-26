import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Divider, Header, Segment, Button, Icon, Container } from 'semantic-ui-react';


class Home extends Component {
    render() {
        return (
            <div>
                <br />
                <Header as="h1" textAlign="center">
                    Wilujeng Sumping Aa, Teteh !!<br />
                </Header>
                <Header as="h3" textAlign="center">
                    Mangga dipilih Menu na...<br />
                </Header>
                <Container>
                    <Segment placeholder >
                        <Grid columns={2} stackable textAlign='center' >
                            <Divider vertical>Or</Divider>
                            <Grid.Row verticalAlign='middle' >
                                <Grid.Column>
                                    <Header icon>
                                        <Icon name='food' />
                                        Tuangeun
                                    </Header>
                                    <Button inverted color="green" href="/tuangeun" >Tingali</Button>
                                </Grid.Column>

                                <Grid.Column>
                                    <Header icon>
                                        <Icon name='coffee' />
                                        Inuman
                                    </Header>
                                    <Button inverted color="green" href="/inuman">Tingali</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>

            </div>
        );
    }
}

export default Home;