import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './Menu.component'
import { DISHES } from '../shared/dishes'
import Header from './Header.component'
import Footer from './Footer.component'
import Home from './Home.component'
import { Routes, Route } from 'react-router-dom'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    }
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId })
  }
  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Header />
        <Menu dishes={this.state.dishes} selectedDish={this.state.selectedDish} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Footer />
        <Routes>
          <Route path='/' element={HomePage} />
          <Route path='/home' element={HomePage} />
        </Routes>
      </div>
    )
  }
}
