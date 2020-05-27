import React, { Component } from 'react';
import { StarRating, Star } from './Stars.js';



export default class Review extends Component {
    constructor(props) {
        this.state = {name: '', headline: "", body: "", rating: 0};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }

      handleRating(value){
          this.setState({rating: value})
      }


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
                                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Add a Headline:
                                        <div>
                                            <input type="text" name="name" value={this.state.headline} onChange={this.handleChange}/>
                                        </div>
                                    </label>
                                </div>
                                <br />

                                <textarea value={this.state.body} onChange={this.handleChange}/>


                                <div>
                                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                                </div>
                            </form>
                        </div>
                        <StarRating data={this.props.reviews} changeRating={this.handleRating} />
                    </div>
                </div>
            </div>
        )
    }
}





