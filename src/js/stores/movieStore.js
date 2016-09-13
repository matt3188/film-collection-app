import Fluxxor from 'fluxxor';
import CONSTANTS from '../constants/constants';

import API from '../api/api';

var MovieStore = Fluxxor.createStore({
  initialize: function(params) {
    this.state = {
      movies: {}
    };

    this.bindActions(
      CONSTANTS.MOVIES.GET, this.getMovies
    );
  },
  getState: function() {
    return this.state;
  },
  getMovies: function(payload) {
    API.moviesGet(payload.name, {}, function(data) {
      this.state.movies = data;
      console.log('Results', this.state);
      this.emit('change');
    }.bind(this));
  }
});

module.exports = MovieStore;
