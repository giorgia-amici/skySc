import React from 'react';
import Itinerary from '../itinerary/Itinerary';

import './Results.scss';

const resultRows = (rows) => {
  return rows.map((row, index) => (
    <Itinerary key={index} itinerary={row}></Itinerary>
  ))
};

const Results = (props) => (
  <main className="results">
    {resultRows(props.results)}
  </main>
);
export default Results;
