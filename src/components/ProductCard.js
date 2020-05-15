import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col, CardSubtitle, Container } from 'reactstrap';
// import product-1 from 'public/img/product-1.png'
export function ProductCard(props) {

    return (
        // <div>
        //     <Card>
        //         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        //         <CardBody>
        //             <CardTitle>{props.title}</CardTitle>
        //             <CardText>This is a wider card with supporting text below </CardText>
        //             <CardText>
        //                 <small className="text-muted">Last updated 3 mins ago</small>
        //             </CardText>
        //         </CardBody>
        //     </Card>

        //     <Card>
        //         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        //         <CardBody>
        //             <CardTitle>{props.title}</CardTitle>
        //             <CardText>This is a wider card with supporting text below </CardText>
        //             <CardText>
        //                 <small className="text-muted">Last updated 3 mins ago</small>
        //             </CardText>
        //         </CardBody>
        //     </Card>
        // </div>
        <Container>
            <Row xs="4">
                <div>
                    <Card>
                        <CardImg top width="100%" src="../public/img/product-1.png" alt="shirt name" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}