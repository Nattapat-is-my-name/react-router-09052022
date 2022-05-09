import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap'
import { COMMENTS } from '../shared/comments'

export default class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComment(comArr) {
    const comments = comArr.map((com) => {
      return (
          <ul className='list-unstyled'>
            <li>
              <p>-- {com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))} </p>
            </li>
            <li>
              <p>{com.comment}</p>
            </li>
          </ul>
      );
    })
    return comments;
  }

  render() {
    if (this.props.dishes != null) {
      const commentArr = COMMENTS.filter((com) => com.dishId === this.props.dishes.id);
      // const comments = commentArr.map((com) => {
      //   return (
      //     <>
      //       <h4>{com.author}</h4>
      //       <p>{com.comment}</p>
      //       <p>{com.date}</p>
      //     </>
      //   );
      // })
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {/* <Card>
              <CardImg top src={this.props.dishes.image} alt={this.props.dishes.name} />
              <CardBody>
                <CardTitle>{this.props.dishes.name}</CardTitle>
                <CardText>{this.props.dishes.description}</CardText>
              </CardBody>
            </Card> */}
            {this.renderDish(this.props.dishes)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {/* {comments} */}
            <h4>Comments</h4>
            {this.renderComment(commentArr)}
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
