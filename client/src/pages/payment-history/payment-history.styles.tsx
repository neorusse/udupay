import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const SearchField = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
  margin-bottom: 20px;

  .search {
    border: 2px solid #e8e8e8;
    border-radius: 4px;
    height: 32px;
    width: 300px;
    padding: 2px 23px 2px 30px;
  }

  .search-icon {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 14px;
  }

  .clear-icon {
    position: absolute;
    top: 9px;
    right: 8px;
    width: 12px;
    cursor: pointer;
    visibility: hidden;
  }

  .search:hover,
  .search:focus {
    border: 1px solid gray;
    background-color: white;
  }
`;

export const Divider = styled.div`
  margin: 24px 0;
  border-bottom: 1px solid #e8e8e8;
`;

export const PaymentList = styled.div`
  max-width: 900px;
  margin: 60px auto;

  p {
    font-size: 18px;
    font-weight: 600;
  }

  @media (max-width: 775px) {
    margin-right: 10px;
    margin-left: 10px;
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
