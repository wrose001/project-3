import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Stars from './Stars';
import axios from 'axios';



function NewReview({ itemID, onSubmit }) {

    const [formFields, setFormFields] = useState({
        reviewHeader: "",
        reviewUser: "",
        reviewBody: "",
        stars: 0,
        itemID
    });


    const handleChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        console.log(formFields);


        const formData = {
            rating: formFields.stars,
            name: formFields.reviewUser,
            headline: formFields.reviewHeader,
            reviewbody: formFields.reviewBody,
            itemID: formFields.itemID
        }
        // itemID: 8
        // reviewBody: "hi"
        // reviewHeader: "title"
        // reviewUser: "george"
        // stars: 4



        axios.post('/createReview', formData).then(reviewResult => {
            onSubmit(formFields);
            setFormFields({
                reviewHeader: "",
                reviewUser: "",
                reviewBody: "",
                stars: 0,
                itemID
            })
        })

    }

    const handleRating = (num) => {
        setFormFields({
            ...formFields,
            stars: num
        })
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
                                rating={formFields.stars}
                                newReview={true}
                                changeRating={handleRating}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="reviewUser" type="text" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Header</Form.Label>
                        <Form.Control name="reviewHeader" type="text" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="reviewBody">
                        <Form.Label>Review</Form.Label>
                        <Form.Control name="reviewBody" onChange={handleChange} as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default NewReview;

