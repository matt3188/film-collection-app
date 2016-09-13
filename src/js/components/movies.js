import React, { Component } from 'react';
import Fluxxor from 'fluxxor';

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

import MovieThumb from './movieThumb';

module.exports = React.createClass({
  displayName: 'App',
  mixins: [FluxMixin, StoreWatchMixin('MovieStore')],
  getStateFromFlux: function() {
    var flux = this.getFlux();

    return {
      movies: flux.store('MovieStore').getState().movies
    };
  },
  render: function() {
    console.log('render', this.state, this.state.movies);
    var movies = [];

    if (this.state.movies && this.state.movies.Search) {
      this.state.movies.Search.forEach(function(movie) {
        movies.push(
          <MovieThumb movie={movie} />
        );
      });
    } else {
      movies.push(
        <div>Sorry, we couldn't find what you were looking for</div>
      );
    }

    return (
      <div className="movies">
        {movies}
      </div>
    );
  }

});
