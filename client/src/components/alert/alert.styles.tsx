import styled from 'styled-components';

export const AlertContainer = styled.div`
  padding: 0.8rem;
  margin: 0 auto;
  opacity: 0.9;
  text-align: center;

  &.alert-danger {
    background: #dc3545;
    color: #fff;
  }

  &.alert-success {
    background: #008000;
    color: #fff;
  }
`;
