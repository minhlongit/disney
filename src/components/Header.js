import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Header() {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error));
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Home" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>Home</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="Home" />
          <span>Search</span>
        </a>
        <a href="/search">
          <img src="/images/watchlist-icon.svg" alt="Home" />
          <span>WatchList</span>
        </a>
        <a href="/search">
          <img src="/images/original-icon.svg" alt="Home" />
          <span>Originals</span>
        </a>
        <a href="/search">
          <img src="/images/movie-icon.svg" alt="Home" />
          <span>Movies</span>
        </a>
        <a href="/search">
          <img src="/images/series-icon.svg" alt="Home" />
          <span>Series</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row no-wrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: "";
        bottom: -6px;
        display: block;
        position: absolute;
        height: 2px;
        opacity: 0;
        right: 0;
        left: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.46, 0.94);
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    border-color: transparent;
    color: #000;
  }
`;

export default Header;
