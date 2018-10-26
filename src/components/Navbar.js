import React from "react";
import "../styles/Navbar.css";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: "lightblue",
    justifyContent: "flex",
    textAlign: "center"
  },
  peeStyle: {
    fontSize: "50px",
    top: "-40px",
    position: "relative",
    color: "darkorange",
    font: "comicsans"
  },
  buttonStyle: {
    position: "absolute",
right: "10px",
top: "15px",
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

const Navbar = () => (
  <nav style={styles.navbarStyle} className="navbar">
  <row>
    <a href="/"><img border="0" src={process.env.PUBLIC_URL + '/puplogo.png'} alt="Party Up" width="65" hieght="65" /></a>
    <a href="/Signin">| Sign In</a>
    <p style={styles.peeStyle}> Party Up! </p>
    <a href="/Post" style={styles.buttonStyle}>Find Help!</a>
  </row>
  </nav>
);

export default Navbar;
