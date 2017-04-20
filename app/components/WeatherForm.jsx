var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value; //accesses value in input
    if (location.length > 0){ //ensures there's input in field
      this.refs.location.value = ''; //clears input field
      this.props.onSearch(location);
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div><input type="text" ref="location" placeholder="WeatherForm Component"/></div>
          <div><button>Get Weather</button></div>
        </form>
      </div>

    );
  }
});

module.exports = WeatherForm;
