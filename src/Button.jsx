import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <a href="#" className={this._buttonClasses()} onClick={this._handleClick}>
        {this.props.children}
      </a>
    );
  }

  // This function figures out what the classes should be for our button
  // Based on the primary, secondary, danger and diabled props being passed to this component.
  _buttonClasses = () => {
    let classes = 'btn';

    if (this.props.primary) {
      classes += ' btn-primary';
    } else if (this.props.secondary) {
      classes += ' btn-secondary';
    } else if (this.props.danger) {
      classes += ' btn-danger';
    }

    if (this.props.disabled) {
      classes += ' disabled';
    }

    return classes;
  };

  // Handle the click event of the anchor tag
  _handleClick = e => {
    // Prevent the default action (redirect to /#)
    e.preventDefault();

    // If the button is NOT disabled
    if (!this.props.disabled) {
      // Call the prop function which was passed to us
      this.props.onClick();
    }
  };
}
