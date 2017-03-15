import React from 'react';
import BpkLargeMenuIcon from 'bpk-component-icon/lg/menu';
import TOKENS from 'bpk-tokens/tokens/base.common';

import './TopNav.scss';


const TopNav = () => (
  <header className='header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <span className='logo' />
    </a>
    <BpkLargeMenuIcon fill={TOKENS.colorBlue500}/>
  </header>
);

export default TopNav;
