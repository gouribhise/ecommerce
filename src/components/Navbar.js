import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
<Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">  <div class="container-fluid">
  <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
<li className="nav-item ml-5">
        <Link to="/" className="nav-link">
                     products
                   </Link>        </li>


      </ul>
      <ul class="d-flex">
      <Link to="/cart" className="ml-auto text-right">
      <ButtonContainer>
             <span >
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
      </Link>
       </ul>
    </div>
  </div>
</Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;
