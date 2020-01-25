import styled from 'styled-components';

export const SigninContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
`;

export const Title = styled.h3`
  color: #0f1c70;
  margin: 5px 0;
  text-align: center;
`;

export const FormContainer = styled.div`
  // max-width: 420px;
  margin-top: 30px;
`;

export const ExistingUser = styled.div`
  font-weight: 600;
  margin: 3px 0;
  text-align: center;

  span {
    cursor: pointer;
    color: #f5a623;
  }
`;
