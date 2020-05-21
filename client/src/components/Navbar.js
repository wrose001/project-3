import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'
import './Style.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="container navbar navbar-expand-sm navbar-dark px-sm-5 justify-content-between">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" width="200"/>
        </Link>

        {/* <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
             <Link to="/" className="nav-link">
              products
             </Link>
          </li>
        </ul> */}

        <ul className="navbar-nav align-items-right">
          <li className="nav-item mr-1">
            <Link className="ml-auto" to="/login">
                <ButtonContainer className="border-0 text-primary btnHover">
                  <span className="mr-2">
                    <i className="fas fa-portrait"></i>
                  </span>
                  login
                </ButtonContainer> 
            </Link>
          </li>
          <li className="nav-item mr-1">
          <Link className="ml-auto" to="/cart">
                <ButtonContainer className="border-0 text-primary btnHover">
                  <span className="mr-2">
                    <i className="fas fa-cart-plus"></i>
                  </span>
                  my cart
                </ButtonContainer> 
            </Link>
          </li>
        </ul>

      </nav>
    )
  }
}


// const NavbarWrapper = styled.nav`
//     background: var(--mainBlue);
//     .nav-link {
//       color: var(--mainWhite) !important;
//       font-size: 1.3rem;
//       text-transform: capitalize;
//     }
// `