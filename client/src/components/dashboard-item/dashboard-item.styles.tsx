import styled from 'styled-components';

export const ItemContainer = styled.div`
text-align: center;
max-width: 100%;
width: 250px;
height: 180px;
font-size: 1em;
padding: 20px;
margin-bottom: 20px;
font-weight: 600;
background: rgba(203, 207, 210, 0.18);
border-radius: 8px;
bottom: 0;
transition: 300ms ease-in;
    transition-property: all;
transition-property: bottom, box-shadow;

  &:hover {
    box-shadow: 3px 10px 24px #ccc;
    bottom: 6px;
  }

  }
`;
