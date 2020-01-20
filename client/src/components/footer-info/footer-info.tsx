import React from 'react';

import {
  FooterInfoContainer,
  List,
  ListItems,
  Email,
} from './footer-info.styles';

function FooterInfo() {
  return (
    <FooterInfoContainer>
      <div>
        <h3>UduPay</h3>
        <List>
          <ListItems>
            <a href="./company">Company</a>
          </ListItems>
          <ListItems>
            <a href="./blog">Blog</a>
          </ListItems>
          <ListItems>
            <a href="./support">Support</a>
          </ListItems>
        </List>
      </div>

      <div>
        <h3>Legal</h3>
        <List>
          <ListItems>
            <a href="./service">Terms of Service</a>
          </ListItems>
          <ListItems>
            <a href="./policy">Privacy Policy</a>
          </ListItems>
          <ListItems>
            <a href="./compliance">Compliance</a>
          </ListItems>
        </List>
      </div>

      <div>
        <h3>Lagos</h3>
        <List>
          <ListItems>5 Atlantic Estate</ListItems>
          <ListItems>Lekki-Epe Expressway</ListItems>
          <ListItems>Lekki, Lagos</ListItems>
          <Email>
            <a href="mailto:info@udupay.com">info@udupay.com</a>
          </Email>
          <ListItems>+234-806-890-8815</ListItems>
        </List>
      </div>

      <div>
        <h3>Abuja</h3>
        <List>
          <ListItems>15 Maitama District</ListItems>
          <ListItems>Wuse, Abuja</ListItems>
          <Email>
            <a href="mailto:info@udupay.com">info@udupay.com</a>
          </Email>
          <ListItems>+234-806-890-2315</ListItems>
        </List>
      </div>
    </FooterInfoContainer>
  );
}

export default FooterInfo;
