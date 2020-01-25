import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

export const FormContainer = styled.div`
  margin-top: 20px;
`;

export const RegisterTitle = styled.h3`
  color: #0f1c70;
  margin: 5px 0;
  text-align: center;
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
