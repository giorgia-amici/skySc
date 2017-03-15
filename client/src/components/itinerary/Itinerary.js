import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkButton from 'bpk-component-button';
import Leg from '../leg/Leg';

import './Itinerary.scss';

const Itinerary = (props) => (
  <section className='itinerary'>
    <BpkCard href="#">
      <Leg leg={props.itinerary.outBound} />
      <Leg leg={props.itinerary.inBound} />
      <div className="price-and-cta">
        <span>£{props.itinerary.price}</span>
        <BpkButton>Select</BpkButton>
        <p>{props.itinerary.agent.name}</p>
      </div>
    </BpkCard>
  </section>
);

export default Itinerary;
