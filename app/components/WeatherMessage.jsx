var React = require('react');

//we can use ES6 destructuring within the function parameter!
var WeatherMessage = ({temp, location}) => {
  return (
    <div>It is {temp} degrees F in {location}</div>
  )
}

module.exports = WeatherMessage;
