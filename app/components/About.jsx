var React = require('react');

//stateless functional Component. only defines render method without maintaining state
var About = (props) => {
  return (
    <div>
      <h3>About Page</h3>
      <p>welcome to the about page</p>
    </div>

  )
};

module.exports = About;
