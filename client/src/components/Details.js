import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import Product from './Product';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReviewCards from './Review';
import NewReview from './NewReview';
// import StarRating from './Stars';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value) => {
            const { id, company, img, info, price, title, inCart } =
              value.detailProduct;

            return (
              <Container fluid>
                <Row className="align-items-center justify-content-center">
                  <Col xs={12} className="mx-auto text-center text-slanter text-blue my-5">
                    <h1>
                      {title}
                    </h1>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-around">
                  <Col xs={1} />
                  <Col xs={3}>
                    <img src={img} className="img-fluid" alt="product" />
                  </Col>
                  <Col xs={1} />
                  <Col className="mx-auto my-3 text-capitalize" xs={6}>
                    <h2>model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by : <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price: <span>$</span> {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                      </p>
                    <p className="text-muted lead">
                      {info}
                    </p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>
                          back to products
                          </ButtonContainer>
                      </Link>
                      <ButtonContainer
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </Col>
                  <Col xs={1} />
                </Row>
                <Row className="align-items-center py-5 justify-content-around">
                  <Col xs={1} />
                  <Col xs={3}>
                    <NewReview />
                  </Col>
                  <Col xs={1} />
                  <Col xs={6}>
                    <ReviewCards
                      data={value.reviews}
                    />
                  </Col>
                  <Col xs={1} />
                </Row>
              </Container>
            );

          }
        }
      </ProductConsumer>
    )
  }
}