import React from 'react';

class Button extends React.Component {
  render() {
    const { type, className, name, handleClick, disabled } = this.props;
    return (<button name={name} type={type} className={className} onClick={handleClick} disabled={disabled}>{name}</button>);
  }
}

export default Button;