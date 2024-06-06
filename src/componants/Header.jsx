import React from 'react'
import {NavLink} from "react-router-dom";
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
      <MainHeader className='overflow-hidden'>
        <NavLink to="/">
            <img src="./images/4 (1).png" alt="logo" className='logo' />
        </NavLink>
        <Navbar/>
      </MainHeader>  
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  width: 100%;
  background-color: ${({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;

  .logo{
    height: auto;
    max-width: 60%;
  }
`;

export default Header
