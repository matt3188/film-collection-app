import React from 'react';

module.exports = React.createClass({
  displayName: 'Movies',
  render: function() {
    var movie = this.props.movie;
    var image = movie.Poster;
    
    return (
      <div className="movie">
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} width="250" />
      </div>
    );
  }

});
