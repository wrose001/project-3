import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
import logo from '../logo.svg'




export default class Navbar extends Component {
    render() {
        return (
            <Nav className="row align-items-center">
                <NavItem className="col-8">
                    <NavLink href="/">
                        <img src={logo} alt="store" className="navbar-brand" />
                    </NavLink>
                </NavItem>
                <NavItem className="col-2">
                    <NavLink href="#">Login</NavLink>
                </NavItem>
                <NavItem className="col-2">
                    <NavLink href="/cart"><BsFillBagFill /></NavLink>
                </NavItem>
            </Nav>
        );
    }
}