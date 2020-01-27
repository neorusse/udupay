import styled from 'styled-components';

export const FooterInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 60px 0;
  border-bottom: 1px solid rgb(220, 220, 220);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItems = styled.li`
  font-size: 1.7rem;
  padding: 5px 0;
  line-height: 1.6;
`;

export const Email = styled.li`
  font-size: 1.7rem;
  padding: 5px 0;
  line-height: 1.6;

  a {
    color: #0ba4db;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #0980aa;
  }
`;
