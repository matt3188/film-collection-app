var G = 'GET';
var P = 'POST';

var API = {
  addClient: function(data, cb) {
    this.XHR('client/new', P, cb, JSON.stringify(data));
  },
  moviesGet: function(frag, data, cb) {
    this.XHR(frag, G, cb, JSON.stringify(data));
  },
  XHR: function(frag, method, cb, data) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(data) {
      cb(JSON.parse(data.currentTarget.responseText));
    });
    xhr.open(method, 'http://www.omdbapi.com/?s=' + frag + '&y=&plot=short&r=json', true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();

    return xhr;
  },
  generateQueryString: function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  }
};

module.exports = API;
