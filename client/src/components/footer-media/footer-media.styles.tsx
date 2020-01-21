import styled from 'styled-components';

export const FooterMediaContainer = styled.div`
  display: flex
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 620px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FooterCopyright = styled.div`
  display: inline-block;
  color: #4a4a4a;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.5;
`;

export const FooterSocial = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FooterSocialLinks = styled.li`
  margin-bottom: 0;
  margin-left: 30px;
  display: inline-block;
  color: #4a4a4a;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.5;
`;
