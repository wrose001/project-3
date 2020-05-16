import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import {StoreProvider} from './utils/GlobalState'
// import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StoreProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />

        </Switch>
        </StoreProvider>
      </React.Fragment>
      
    );
  }
}

export default App;