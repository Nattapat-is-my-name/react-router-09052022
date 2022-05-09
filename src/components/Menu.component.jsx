import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap'
import DishDetail from './DishDetail.component';

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function renderDish(dish) {
  if (dish != null) {
    return (
      <DishDetail dishes={dish} />
      // <Card>
      //   <CardImg top src={dish.image} alt={dish.name} />
      //   <CardBody>
      //     <CardTitle>{dish.name}</CardTitle>
      //     <CardText>{dish.description}</CardText>
      //   </CardBody>
      // </Card>
    );
  } else {
    return (
      <div></div>
    );
  }
}

const Menu = (props) => {

  const menu = props.dishes.map((dish) => {
    return (
      <div className='col-12 col-md-5 m-1'>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  
  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
      {/* <div className="row">
        <div className="col-12 col-md-5 m-1">
          {renderDish(props.dishes[props.selectedDish])}
        </div>
      </div> */}
          {renderDish(props.dishes[props.selectedDish])}
    </div>
  )
}

export default Menu;