import React, { Component } from 'react';
import NavbarKeras from './NavbarKeras';
import Home from './Home';
// import Kontak from './Kontak';


class App extends Component {
  render() {
    return (
      <div>
        <NavbarKeras />
        <Home />
      </div>
    );
  }
}

export default App;