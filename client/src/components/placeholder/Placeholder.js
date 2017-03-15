import React from 'react';
import BpkLargePriceAlertIcon from 'bpk-component-icon/lg/price-alerts';
import TOKENS from 'bpk-tokens/tokens/base.common';

import './Placeholder.scss';

const Placeholder = () => (
  <section className="refine-search">
    <span>Filter</span>
    <span>Sort</span>
    <div className="price-alerts">
      <BpkLargePriceAlertIcon fill={TOKENS.colorBlue600}/>
      <span>Price Alert</span>
    </div>
  </section>
);

export default Placeholder;
