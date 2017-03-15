import React from 'react';
import BpkLargeArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import TOKENS from 'bpk-tokens/tokens/base.common';

import './Header.scss';

const Header = () => (
  <section className="summary">
    <header>
      <span>EDI</span>
      <BpkLargeArrowRightIcon fill={TOKENS.colorGray50}/>
      <span>LON</span>
    </header>
      <p>2 travellers, Economy</p>
  </section>
);

export default Header;
