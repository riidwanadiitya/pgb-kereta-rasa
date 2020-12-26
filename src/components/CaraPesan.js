import React, { Component } from 'react';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';

class CaraPesan extends Component {
    render() {
        return (
            <div>
                <Segment stacked textAlign="center">
                    <Header as="h3">Cara Pemesanan</Header>
                    <p>Pilih menu yang ingin di pesan di atas. setelah itu langsung kirim pesan via Whatsapp atau Instagram
                    ke toko dengan menekan salah satu tombol dibawah disertai lokasi Google Map, karena ongkir berdasarkan jarak toko ke alamat.
                        </p>
                    <p>Contoh:</p>
                    <Segment inverted color="gray" >
                        <p>Menu: Chicken Wrap BBQ (2), Chicken Wrap BP(3), Milky Hazelnut (1)</p>
                        <p>Alamat: Desa Cigombong</p>
                    </Segment>
                    <Button icon labelPosition="right"
                        href="https://api.whatsapp.com/send?phone=6289639247810&text=Hai%20Masinis%20Kereta%20Rasa,%20saya%20mau%20pesen%20.%20.%20.%0AMenu%20:%20.%20.%20.%20(Jumlah)%20%0AAlamat%20:%20.%20.%20.%20(bila%20ingin%20delivery)"
                        target="_blank">
                        <Icon name="whatsapp" />
                            Whatsapp
                        </Button>
                    <Button icon labelPosition="right" href="https://www.instagram.com/kereta.rasa/" target="_blank"><Icon name="instagram" /> Instagram</Button>
                </Segment>
            </div>
        );
    }
}

export default CaraPesan;