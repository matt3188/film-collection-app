import React from 'react';
import Fluxxor from'fluxxor';

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

import '../css/App.css';

import MoviesIndex from './components/movies';

module.exports = React.createClass({
  displayName: 'App',
  mixins: [FluxMixin, StoreWatchMixin('MovieStore')],
  getStateFromFlux: function() {
    var flux = this.getFlux();

    return {
      state: {}
    };
  },
  componentWillMount:function() {
    console.log('app will mount');
  },
  render: function() {
    return (
      <div className="app">
        <input type="text" placeholder="Search" onChange={this.moviesName} />
        <MoviesIndex />
      </div>
    );
  },
  moviesName: function(e) {
    this.getFlux().actions.movies.get(e.currentTarget.value);
  }

});
