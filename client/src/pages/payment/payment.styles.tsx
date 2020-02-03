import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    padding-right: 20px;
    color: #0f1c70;
    font-weight: 600;
    font-size: 14px;
  }

  @media (max-width: 650px) {
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    p {
      padding-right: 0px;
    }

    LogoContainer {
      padding-left: 0px;
    }
  }
`;

export const PayContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 450px;
  margin 0 auto;
  padding: 1.3em 1.85em;
  background: #fbfbfb;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.16), 0 1px 9px rgba(0, 0, 0, 0.08);

  @media (max-width: 500px) {
    margin-right: 10px;
    margin-left: 10px;
  }
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding-left: 20px;
`;

export const LogoutLink = styled(Link)`
  font-size: 13px;
  color: #fff;
  padding: 0 20px;

  &:hover {
    color: #f5a623;
  }
`;

export const Support = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
 align-items: center;
  height: 40px
  background: linear-gradient(
    to bottom,
    rgb(52, 50, 72) 0%,
    rgb(63, 61, 86) 75%,
    rgb(63, 61, 86) 100%
  );
  margin-bottom: 10px;

  p {
    font-size: 13px;
    color: #fff;
    cursor: pointer;
    padding-left: 20px;
  }

   & p:hover {
    color: #f5a623;
  }
`;

export const FooterCopyright = styled.div`
  width: 100%;
  height: 40px
  background-color: #f5a623;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  line-height: 1.5;
  position: fixed;
  bottom: 0;

  p {
    font-size: 13px;
     text-align: center;
  }
`;
