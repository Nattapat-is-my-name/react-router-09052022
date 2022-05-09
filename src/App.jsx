import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ristorante Con Fusion</NavbarBrand> 
          </div>
        </Navbar>
      </div>
    );
  }
}
