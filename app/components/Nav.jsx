var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    //pull value from search input field from ref=location
    var location = this.refs.search.value; //accesses value in input
    var encodedLocation =  encodeURIcomponent(location);

    if (location.length > 0){ //ensures there's input in field
      this.refs.search.value = ''; //clears input field
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-test"> React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Get Weather </IndexLink></li>
            <li><Link to="about" activeClassName="active" activeStyle={{fontWeight:'bold'}}> About </Link></li>
            <li><Link to="example" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Examples </Link></li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input ref="search" type="search" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
})
module.exports = Nav;
