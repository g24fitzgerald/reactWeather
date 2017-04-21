var React = require('react');

//stateless functional Component. only defines render method without maintaining state
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About Page</h1>
      <p>Welcome to my weather application built in React</p>
      <p>Here are some of the tools I've used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> -The Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map</a> -The API used to search for weather data by city name.
        </li>
      </ul>
    </div>

  )
};

module.exports = About;
