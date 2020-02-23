import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SigninContainer = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 2fr 1fr;
  height: 100vh;

  @media (max-width: 1100px) {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }

  @media (max-width: 899px) {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }

  @media (max-width: 650px) {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 0 1fr;
    height: 100vh;

    .col-sp-2 {
      display: none;
    }
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 20px;

  & .logo {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h3`
  color: #fff;
`;

export const FormContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  background: linear-gradient(
    to bottom,
    rgb(52, 50, 72) 0%,
    rgb(63, 61, 86) 75%,
    rgb(63, 61, 86) 100%
  );

  color: #fff;
`;

export const ExistingUser = styled.div`
  font-weight: 600;
  margin: 3px 0;
  text-align: center;

  span {
    cursor: pointer;
    color: #f5a623;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ImgDiv = styled.div`
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  background-color: #ffffff;
  color: #fff;

  .svg img {
    padding-top: 95px;
  }

  .svg {
    max-width: 550px;
    margin: auto;
  }

  @media (max-width: 899px) {
    svg {
      width: 200px;
      height: 200px;
    }
  }
`;
