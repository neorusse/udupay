import React from 'react';
import styled from 'styled-components';

const BurgerMenu = ({ handleNavbar, navbarState }) => {
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={navbarState ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default BurgerMenu;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  width: 30px;
  cursor: pointer;

  & span {
    background: #000;
    display: block;
    position: relative;
    width: 3.5rem;
    height: 0.4rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }
`;
