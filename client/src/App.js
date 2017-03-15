import React, { Component } from 'react';
import moment from 'moment';
import './App.scss';

import TopNav from './components/topnav';
import Header from './components/header';
import Placeholder from './components/placeholder';
import Results from './components/results';
import { BpkExtraLargeSpinner } from 'bpk-component-spinner'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      spinning: true,
      filters: {
        "locationSchema": "sky",
        "fromPlace": "EDI-sky",
        "toPlace": "LOND-sky",
        "fromDate": moment().day(8).format("YYYY-MM-DD"), //next Monday
        "toDate": moment().day(9).format("YYYY-MM-DD"), // next Tuesday
        "class": "Economy"
      }
    };
  }

  componentDidMount(){
    var params = new URLSearchParams();
    for(var key in this.state.filters){
        params.set(key, this.state.filters[key]);
    }

    fetch('http://localhost:4000/api/search?' + params.toString())
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.setState({
        results: results,
        spinning: false
      });
    })
    .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <TopNav/>
        <Header/>
        <Placeholder/>
        {this.state.spinning ? <BpkExtraLargeSpinner /> : null}
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
