import React from 'react';

import FooterInfo from '../../components/footer-info/footer-info';
import FooterMedia from '../../components/footer-media/footer-media';

function Footer() {
  return (
    <div className="footer-bg">
      <div id="container">
        <FooterInfo />
        <FooterMedia />
      </div>
    </div>
  );
}

export default Footer;
