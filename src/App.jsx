import React, { Component } from 'react';
import Button from './Button.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // Setup app initial state
    this.state = {
      // Initial color is unknown (changes once a button is clicked)
      headerColor: null,
      // List of all possible colors, we don't know this @ app boot so we default it to an empty array for now.
      // This needs to be set otherwise this.state.possibleColors.map will fail
      possibleColors: []
    };
  }

  componentDidMount() {
    // Simulate a network request which will fetch the possible colors.
    setTimeout(() => {
      this.setState({
        possibleColors: [
          'black',
          'red',
          'green',
          'blue',
          'yellow',
          'tomato',
          'coral'
        ]
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <Header color={this.state.headerColor}>Hello React :)</Header>

        <ul>
          {this.state.possibleColors.map(color => (
            <Button
              key={color}
              primary
              disabled={this.state.headerColor === color}
              onClick={() => {
                this._handleColorChange(color);
              }}
            >
              {color}
            </Button>
          ))}
        </ul>
      </div>
    );
  }

  // Event handler for our button clicks. This will get called by the callback function passed to the onClick of each button.
  _handleColorChange = color => {
    this.setState({ headerColor: color });
  };
}

export default App;

// Functional Component to render out the Header, takes a color and uses it to change the color style
const Header = ({ children, color }) => {
  return <h1 style={{ color: color }}>{children}</h1>;
};
