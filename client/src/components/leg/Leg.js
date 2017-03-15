import React from 'react';
import BpkLargeArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import TOKENS from 'bpk-tokens/tokens/base.common';

import './Leg.scss';

const Leg = (props) => {
  var stops;
  if (props.leg.isDirect) {
    stops = <p className="segments direct">Direct</p>
  } else if (props.leg.stop === 1) {
    stops = <p className="segments stops">{props.leg.stop} stop</p>
  } else {
    stops = <p className="segments stops">{props.leg.stop} stops</p>
  }
  return (
    <div className="leg">
      <div className="leg-details">
      <img src={props.leg.carriers[0].faviconImage} />
        <div className="leg-details-dep">
          <span>{props.leg.departure}</span>
          <p>{props.leg.origin.code}</p>
        </div>
        <BpkLargeArrowRightIcon fill={TOKENS.colorGray100}/>
        <div className="leg-details-arr">
          <span>{props.leg.arrival}</span>
          <p>{props.leg.destination.code}</p>
        </div>
        <div className="leg-duration">
          <p className="time">{props.leg.duration}</p>
          {stops}
        </div>
      </div>
    </div>
  );
};

export default Leg;
