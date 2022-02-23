import React from 'react';
import styled from 'styled-components';
import img from '../assets/logo.svg';

const NavbarContainer = styled.section``
const NavbarWrap = styled.section``
const Logo = styled.section``
const Nav = styled.section``
const NavLink = styled.section``
const Search = styled.section``
const SearchWrap = styled.section``
const Input = styled.section``
const ButtonContainer = styled.section``
const Button = styled.section``


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">MARKET</NavLink>
          <NavLink to="/">TRADE</NavLink>
          <NavLink to="/">PRICING</NavLink>
          <NavLink to="/">DOWNLOAD</NavLink>
          <NavLink to="/">HELP</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button>  SIGN UP </Button>
          <Button>  LOG IN </Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  )
}

export default Navbar