import React, { Component } from 'react';
import Stars from './Stars';

import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

function ReviewCards({ data, ...props }) {
    console.log(props.productId)
    return (
        <CardColumns>
            {(data.length < 1)
                ? <div>No Reviews ... Be the First!</div>
                : data.map((r) => {
                    return (<Card>
                        <Card.Header>
                            <div className="row">
                                <Stars
                                    rating={r.stars}
                                    newReview={false}
                                />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {r.reviewHeader}
                            </Card.Title>
                            <Card.Text>
                                {r.reviewBody}
                            </Card.Text>
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{r.reviewUser}</cite>
                            </footer>
                        </Card.Body>
                    </Card>)
                })
            }
        </CardColumns>
    );
}

export default ReviewCards;
