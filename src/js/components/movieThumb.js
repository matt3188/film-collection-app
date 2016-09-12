import React from 'react';

module.exports = React.createClass({
  displayName: 'Movies',
  render: function() {
  	var movie = this.props.movie;

    return (
      <div className="movie">
      	<h2>{movie.Title}</h2>
      </div>
    );
  }

});
