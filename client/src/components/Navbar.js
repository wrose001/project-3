import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
import logo from '../logo/SHADESLOGO-01.svg'
//import styled from 'styled-components';
import "./Style.css"


export default class Navbar extends Component {
    render() {
        return (
            <Nav className="row align-items-center bg-light navbar-light mb-4">
                <NavItem className="col-9">
                    <NavLink href="/">
        <img src={logo} alt="store" className="navbar-brand" width="200" />
                    </NavLink>
                    {/* <NavItem className="col-10">
                        <NavLink href="/cart">Products</NavLink>
                    </NavItem> */}
                </NavItem>

                <NavItem className="col-3 pr-5" id="loginCart">
                    <NavLink href="#" className="float-right"><i className="fas fa-portrait"></i> Login</NavLink>
                    <NavLink href="/cart" className="float-right"><i className="fas fa-cart-plus"></i> My cart</NavLink>
                    {/* <NavLink href="/cart"><BsFillBagFill />My cart</NavLink> */}

                </NavItem>


            </Nav>
        );
    }
}

//const ButtonContainer = styled.button`
//text-transform:capitalize;
