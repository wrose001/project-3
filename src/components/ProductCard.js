import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Col, CardSubtitle } from 'reactstrap';
// import product-1 from 'public/img/product-1.png'
export function ProductCard(props) {

    return (

        <Card>
            <CardImg top width="100%" src={props.img} alt={props.title} />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.price}</CardSubtitle>
                <CardText>{props.info}</CardText>
                <Button onClick={() => {
                    props.addToCart(`${props.title} (${props.id})`)
                }}>Add to cart</Button>
            </CardBody>
        </Card>



    );
}