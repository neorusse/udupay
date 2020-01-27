import { animated } from 'react-spring';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled(animated.nav)`
  z-index: 1;
  margin-bottom: 25px;
  font-size: 1.7rem;
  font-weight: 600;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  justify-self: end;
  margin: auto 0;

  & a {
    border-bottom: 1px solid transparent;
    margin-left: 5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 769px) {
      display: none;
    }
  }
`;

// passing style into our imported Link component
// this will give us a styled Link component.
// This is how you add styles to custom components
export const LogoContainer = styled(Link)`
  height: 100%;
  padding-top: 20px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fdcb6e;
  }
`;

export const NavLinkSignUp = styled(Link)`
  background-color: #f5a623;
  border-radius: 4px;
  box-shadow: 0 2px 3px 0 #ccc;
  color: #fff;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 1.3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #db8c0a;
    color: #fff;
  }
`;

export const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 5px;
  background-color: #09090e;
  margin: 2.5px;
  z-index: 9999;

  .line-color {
    z-index: 999999;
    color: #000;
    transform: translateX(45);
  }
`;
