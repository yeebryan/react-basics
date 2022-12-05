import React from 'react'; // import React
import './styles.css'; // import css

// create and update App function with some html
// react.fragment makes it easier/efficient to write multiple element
function App() {
  return (
    <React.Fragment>
      <h1>Hello Worlds!</h1>    
      <p>Welcome to our first React App</p>
      <img src={require('./logo.svg').default} alt ='logo'/>
      <img src={require('./cat.jpeg').default} alt='cat'/>
    </React.Fragment>
    );
}
// anything in {} is javascript 

export default App;

// A React app consists of various components - a component
// essentially a function that will return HTML output
// The App component is what React app will display when u run it
