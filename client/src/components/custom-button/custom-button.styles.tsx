import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  background-color: #f5a623;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 #ccc;
  color: #fff;
  padding: 0 16px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 1.6rem;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #db8c0a;
    color: #fff;
  }
`;
