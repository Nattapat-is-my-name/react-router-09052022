import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './Menu.component'
import { DISHES } from '../shared/dishes'
import Header from './Header.component'
import Footer from './Footer.component'
import Home from './Home.component'
import Contact from './Contact.component'
import { Routes, Route } from 'react-router-dom'
import { COMMENTS } from '../shared/comments'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId })
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
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
          <Route exact path='/contactus' element={<Contact />} />
        </Routes>
      </div>
    )
  }
}
