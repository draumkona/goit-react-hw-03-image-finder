import React, { Component } from 'react';
import api from 'services/api';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
      </>
    );
  }
}