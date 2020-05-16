import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
import logo from '../logo.svg'
import styled from 'styled-components';



export default class Navbar extends Component {
    render() {
        return (
            <Nav className="row align-items-center bg-info navbar-light">
                <NavItem className="col-8">
                    <NavLink href="/">
                        <img src={logo} alt="store" className="navbar-brand" />
                    </NavLink>
                    {/* <NavItem className="col-10">
                        <NavLink href="/cart">Products</NavLink>
                    </NavItem> */}
                </NavItem>
                <NavItem className="col-2">
                    <NavLink href="#">Login</NavLink>
                </NavItem>

                <NavItem className="col-2">
                    <NavLink href="/cart"><BsFillBagFill />My cart</NavLink>

                </NavItem>


            </Nav>
        );
    }
}

const ButtonContainer = styled.button`
text-transform:capitalize;
`