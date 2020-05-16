import React, { Component } from 'react';
// import Product from './Product';

export default class Jumbotron extends Component {
    render() {
        return (
        //     <div id="jumbotron" className="jumbotron jumbotron-fluid">
        //     <div className="container">
        //       <h1 className="display-4">Fluid jumbotron</h1>
        //       <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        //     </div>
        //   </div>
        <div>
         <video autoplay muted loop id="myVideo">
            <source src="rain.mp4" type="video/mp4">
        </video>
        </div>
                );
    }
}