import React, { Component } from 'react';
import Stars from './Stars';

import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

function ReviewCards({ data }) {

    return (
        <CardColumns>
            {(!data)
                ? <div>No Reviews ... Be the First!</div>
                : data.map((review) => {
                    return (<Card>
                        <Card.Header>
                            <div className="row">
                                <Stars
                                    rating={review.rating}
                                    newReview={false}
                                />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {review.text}
                            </Card.Title>
                            <Card.Text>
                                ~{review.user}
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                })
            }
        </CardColumns>
    );
}

export default ReviewCards;
