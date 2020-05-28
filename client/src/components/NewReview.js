import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Stars from './Stars';



function NewReview() {

    const [formFields, setFormFields] = useState({
        reviewHeader: "",
        reviewUser: "",
        reviewBody: "",
        stars: 0,
        itemID: 0,
    });


    const handleChange = (e) => {
        console.log(e.target);
    }

    return (
        <Card>
            <Card.Header>Please leave us a customer review</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="stars">
                        <Form.Label>Rating</Form.Label>
                        <div className="row">
                            <Stars
                                rating={0}
                                newReview={true}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="reviewUser">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="reviewHeader">
                        <Form.Label>Header</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="reviewBody">
                        <Form.Label>Review</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default NewReview;

