import React from 'react';

import FooterInfo from '../footer-info/footer-info';
import FooterMedia from '../footer-media/footer-media';

import { FooterContainer } from './footer.styles';

function Footer() {
  return (
    <FooterContainer>
      <FooterInfo />
      <FooterMedia />
    </FooterContainer>
  );
}

export default Footer;
