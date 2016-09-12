import React from 'react';
import ReactDOM from 'react-dom';
import Fluxxor from 'fluxxor';

import App from './js/App';
import './css/index.css';

import actions from './js/actions/actions';

import MovieStore from './js/stores/movieStore';

var movies = {
  MovieStore: new MovieStore(),
};

var flux = new Fluxxor.Flux(movies, actions);

flux.on('dispatch', function(type, payload) {
  console.log('[Dispatch]', type, payload);
});

window.flux = flux;

ReactDOM.render(
  <App flux = { flux } />,
  document.getElementById('root')
);
