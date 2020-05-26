import React, { Component } from 'react';
import StarRating from './Stars.js';



export default class Review extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-text">Please leave us a customer review</h2>
                    <div className="row">
                        <div className="col">
                            <form>
                                <div>
                                    <label>
                                        Name:
                                        <div>
                                            <input type="text" name="name" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Add a Headline:
                                        <div>
                                            <input type="text" name="name" />
                                        </div>
                                    </label>
                                </div>
                                <br />

                                <textarea />


                                <div>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                        <StarRating data={this.props.reviews} />
                    </div>
                </div>
            </div>
        )
    }
}





