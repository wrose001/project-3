import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Product from './Product';
import { ProductCard } from './ProductCard';
import { Container, Row } from 'reactstrap';
import storeProducts from '../data.js';

export default class ProductList extends Component {
    state = {
        storeProducts
    }
    addToCart(id) {
        console.log(id)
    }
    render() {
        return (
            <div>
                <Jumbotron />
                <Product />
                <Container>
                    <Row xs="4">
                        {this.state.storeProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                img={product.img}
                                title={product.title}
                                price={product.price}
                                info={product.info}
                                addToCart={this.addToCart}
                            />
                        ))}
                    </Row>
                </Container>
            </div >
        );
    }
}