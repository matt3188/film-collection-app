import React from 'react';

module.exports = React.createClass({
  displayName: 'Movies',
  render: function() {
  	var movie = this.props.movie;
    var image = (movie.Poster && movie.Poster.search('http') > -1) ? (<img src={movie.Poster} alt={movie.Title} className="movie-poster" />) : (<div className="coming-soon" />)
    return (
      <div className="movie">
        <h2>{movie.Title}</h2>
        {image}
      </div>
    );
  }

});
