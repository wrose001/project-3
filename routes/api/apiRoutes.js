import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '.../client/src/App.js'
import cart from '.../client/src/components/Cart.js'


const routing = (
  <Router>
    <div>
      <Route exact path ="/" component={App} />
      <Route path ="/cart" component={cart} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))