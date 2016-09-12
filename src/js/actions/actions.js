import CONSTANTS from '../constants/constants';

var actions = {
  movie: {
    get: function(name) {
      this.dispatch(CONSTANTS.MOVIE.GET, {
        name: name
      });
    }
  },
  movies: {
    get: function(name) {
      this.dispatch(CONSTANTS.MOVIES.GET, {
        name: name
      });
    },
    got: function(name) {
      this.dispatch(CONSTANTS.MOVIES.GOT, {
        name: name
      });
    }
  },
};

module.exports = actions;
