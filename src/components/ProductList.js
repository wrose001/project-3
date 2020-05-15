import React, { Component } from 'react';
import Product from './Product';
import { ProductCard } from './ProductCard';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product />
                <ProductCard title="Best Title Ever" />
            </div >
        );
    }
}