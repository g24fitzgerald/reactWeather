var React = require('react');

//we can use ES6 destructuring within the function parameter!
var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's {temp}F in {location}.</h3>
  )
};

module.exports = WeatherMessage;
