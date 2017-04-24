var React = require('react');
var ReactDOM = require('react-dom');
//creates new variable called route, sets it to route property of react-router
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//var Route = require('react-router').Route; alternative
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
//load css
require('style!css!sass!applicationStyles')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
