import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;

export const HeroCaption = styled.div`
  flex: 1;
`;

export const Heading = styled.h1`
  font-size: 4.5rem;
  line-height: 55px;
  color: #0f1c70;
  font-weight: 700;
  margin: 120px 0 20px;

  @media screen and (max-width: 420px) {
    font-size: 3.5rem;
    margin-top: 130px;
  }
`;

export const Description = styled.p`
  font-size: 2.1rem;
  line-height: 30px;
  color: #4f4f4f;
`;

export const AppUsers = styled.p`
  font-size: 1.6rem;
  margin-top: 40px;
  line-height: 25px;
  color: #4f4f4f;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex: 1;

  img {
    width: 200px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
